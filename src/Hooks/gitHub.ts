import { useQuery } from 'react-query';
import * as githubApi from '@/API/gitHubApi';
import GithubUserData from '@/Types/GitHub';

export function useGithubUserData(username: string) {
  return useQuery<GithubUserData>(['githubUserData', username], () => githubApi.fetchGithubUserData(username));
}
