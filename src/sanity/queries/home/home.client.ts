import { client } from '@/lib/sanity.client';
import { topicsQuery } from './home.queries';
import { GetTopics } from './home.types';

export const getTopics = async (): Promise<GetTopics> => {
  const topics = await client.fetch(topicsQuery);
  return topics;
};
