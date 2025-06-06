import type { FC } from 'react';
import type { Plan } from '~/chat/interfaces/chat.interface';
import { Button } from '~/components/ui/button';
import { formatDate } from '~/lib/date-formatter';

export interface ClientProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  memberSince: Date;
  currentPlan: Plan;
}

export const ContactInfo: FC<{ client: ClientProps }> = ({ client }) => {
  return (
    <section className="p-4">
      <div className="flex flex-col items-center pb-6 border-b">
        <div className="h-20 w-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl mb-3">
          {client.name.charAt(0).toUpperCase() + client.name.charAt(1).toLowerCase()}
        </div>
        <h3 className="font-semibold text-lg">{client.name || 'G5 Customer'}</h3>
        <p className="text-sm text-muted-foreground">{client?.currentPlan || 'Premium Account'}</p>
        <div className="flex items-center mt-1">
          <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
      </div>

      <div className="py-4 space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Contact Information</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Email:</span>
              <span>{client?.email || 'customer@g5.com'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Phone:</span>
              <span>{client?.phone || '(555) 123-4567'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Customer ID:</span>
              <span>{client?.id || 'G5-12345'}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Account Details</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Plan:</span>
              <span>{client?.currentPlan || 'Premium'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Member since:</span>
              <span>{formatDate(client?.memberSince) || 'Jan 2023'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Last bill:</span>
              <span>{'$150.00'}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Button variant="outline" size="sm" className="w-full">
          View full profile
        </Button>
      </div>
    </section>
  );
};
