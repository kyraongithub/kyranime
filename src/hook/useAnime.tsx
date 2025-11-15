import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { searchAnime, fetchAnimeDetail } from '../services/anime/service';
import type {
  AnimeSearchResponse,
  AnimeDetailResponse,
} from '../interfaces/anime.interface';
import { createCancelableRequest } from '../services/api';

export const useSearchAnime = (
  query: string,
  page: number
): UseQueryResult<AnimeSearchResponse> => {
  return useQuery({
    queryKey: ['anime-search', query, page],
    queryFn: async () => {
      const { signal } = createCancelableRequest();
      return await searchAnime(query, page, signal);
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60,
    retry: 1,
  });
};

export const useAnimeDetail = (
  id: string | number
): UseQueryResult<AnimeDetailResponse> => {
  return useQuery({
    queryKey: ['anime-detail', id],
    queryFn: async () => {
      const { signal } = createCancelableRequest();
      return await fetchAnimeDetail(id, signal);
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
