import { mockFriendsData } from '../utils/mockData';

export const fetchFriends = async () => {
  // In dev mode, return mock data
  if (process.env.NODE_ENV === 'development') {
    return mockFriendsData;
  }

  // In production, fetch data from an API
  // For now, returning mock data for simplicity
  return mockFriendsData;
};
