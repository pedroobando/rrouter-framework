import { useEffect, useState } from 'react';

import { Form } from 'react-router';
import { Copy, Download, Send, ThumbsDown, ThumbsUp } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import { Textarea } from '~/components/ui/textarea';

import type { Route } from './+types/client-chat-page';
import { getClientMessages, sendMessage } from '~/fakes/fake-data';
import { formatDate } from '~/lib/date-formatter';

interface Message {
  role: 'agent' | 'user';
  content: string;
  timestamp: string;
}

// function shouldRevalidate(arg: ShouldRevalidateFunctionArgs) {
//   return false; // false
// }

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { clientId } = params;
  const messages = await getClientMessages(clientId);
  return { messages };
};

export const action = async ({ request, params }: Route.ActionArgs) => {
  const { clientId } = params;
  const form = await request.formData();
  const message = form.get('message') ?? '';

  const newMessage = await sendMessage({
    content: message.toString(),
    sender: 'agent',
    clientId: clientId.toString(),
    createdAt: new Date(),
  });

  return { message: newMessage };
};

const ClientChatPage = ({ loaderData }: Route.ComponentProps) => {
  const [input, setInput] = useState('');
  const { messages } = loaderData || [];

  useEffect(() => {
    setInput('');
  }, [loaderData]);

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center text-center text-muted-foreground py-20">
              <h2 className="text-lg font-semibold mb-2">Welcome to the Support Chat</h2>
              <Send className="h-8 w-8 mb-2 opacity-50" />
              <p className="text-sm">No messages yet. Start the conversation!</p>
            </div>
          )}

          {messages.map((message, index) => (
            <div key={index} className="w-full">
              {message.sender === 'client' ? (
                // Agent message - left aligned
                <div className="flex gap-2 max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NexTalk</span>
                      <span className="text-sm text-muted-foreground">{formatDate(message.createdAt)}</span>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // User message - right aligned
                <div className="flex flex-col items-end">
                  <div className="text-right mb-1">
                    <span className="text-sm font-medium mr-2">G5</span>
                    <span className="text-sm text-muted-foreground">{formatDate(message.createdAt)}</span>
                  </div>
                  <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <Form method="post" className="flex items-center gap-4">
          <Textarea
            placeholder="Type a message as a customer"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[44px] h-[44px] resize-none py-3"
            name="message"
          />
          <Button className="h-[44px] px-4 flex items-center gap-2">
            <Send className="h-4 w-4" />
            <span>Send</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ClientChatPage;
