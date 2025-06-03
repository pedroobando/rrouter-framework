import type { FC } from 'react';
import { useLoaderData, useNavigation, useParams } from 'react-router';
import { ContactNoSelected } from './contacts-information/Contact-no-selected';
import { ContactSkeleton } from './contacts-information/Contact-skeleton';

import type { Client } from '../interfaces/chat.interface';
import { ContactInfo } from './contacts-information/Contact-info';

export const ContactInformationCard: FC = () => {
  const { clientId } = useParams();
  const { client } = useLoaderData();
  const { state } = useNavigation();

  if (client) return <ContactInfo client={client} />;

  const isPending = state === 'loading';
  if (isPending) return <ContactSkeleton />;

  if (!clientId) return <ContactNoSelected />;

  if (!client) return <ContactNoSelected />;
};
