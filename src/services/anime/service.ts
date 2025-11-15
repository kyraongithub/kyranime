import axiosInstance from '../api';
import type {
  AnimeSearchResponse,
  AnimeDetailResponse,
} from '../../interfaces/anime.interface';

export const searchAnime = async (
  query: string,
  page: number,
  signal?: AbortSignal
): Promise<AnimeSearchResponse> => {
  const response = await axiosInstance.get('/anime', {
    params: {
      q: query,
      page,
    },
    signal,
  });

  return response.data;
};

export const fetchAnimeDetail = async (
  id: string | number,
  signal?: AbortSignal
): Promise<AnimeDetailResponse> => {
  const response = await axiosInstance.get(`/anime/${id}`, {
    signal,
  });

  return response.data;
};
