import { parseToNumber, parseToString } from './normalizeData';

import { User } from '@/types/user';
import { Product } from '@/types/product';

const toNormalizedProductEntry = (entry: unknown): Product => {
  if (!entry || typeof entry !== 'object')
    throw new Error('Invalid product API entry');

  if (
    'id' in entry &&
    'title' in entry &&
    'price' in entry &&
    'description' in entry &&
    'category' in entry &&
    'image' in entry
  ) {
    const parsedQuoteEntry: Product = {
      id: parseToNumber(entry.id),
      title: parseToString(entry.title),
      price: parseToNumber(entry.price),
      description: parseToString(entry.description),
      category: parseToString(entry.category),
      image: parseToString(entry.image),
    };

    return parsedQuoteEntry;
  }

  throw new Error('Invalid product API entry or some fields might be missing');
};

const toNormalizedUserEntry = (entry: unknown): User => {
  if (!entry || typeof entry !== 'object')
    throw new Error('Invalid product API entry');

  if (
    'id' in entry &&
    'username' in entry &&
    'email' in entry &&
    'password' in entry
  ) {
    const parsedQuoteEntry: User = {
      id: parseToNumber(entry.id),
      username: parseToString(entry.username),
      email: parseToString(entry.email),
      password: parseToString(entry.password),
    };

    return parsedQuoteEntry;
  }

  throw new Error('Invalid product API entry or some fields might be missing');
};

export { toNormalizedProductEntry, toNormalizedUserEntry };