import GithubUserData from '@/Types/GitHub';
import axios from 'axios';

export const fetchGithubUserData = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data as GithubUserData;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};
