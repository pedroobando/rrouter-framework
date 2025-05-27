import type { FC } from 'react';
import { NavLink } from 'react-router';
import { Button } from '~/components/ui/button';
import { ScrollArea } from '~/components/ui/scroll-area';
import type { Client } from '../interfaces/chat.interface';

interface ContactListProps {
  clients: Client[]; // Assuming clients is an array of Client objects
}

export const ContactList: FC<ContactListProps> = ({ clients }) => {
  return (
    <ScrollArea className="h-[calc(100vh-134px)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {clients.map((client) => (
              <NavLink
                key={client.id}
                to={`/chat/client/${client.id}`}
                className={({ isActive }) =>
                  `flex w-full justify-start my-2 p-1 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-primary/10' : ''
                  }`
                }
              >
                <div className="h-6 w-6 rounded-full bg-primary/20 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
                  {client.name[0]}
                </div>
                <span className="text-gray-400">{client.name}</span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};
