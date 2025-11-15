import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAnimeDetail } from '../../../hook/useAnime';
import { useAppDispatch } from '../../../store/hook';
import { setSelectedAnime } from '../../../store/search/searchSlice';

const useDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setSelectedAnime(Number(id)));
    }
  }, [id, dispatch]);

  const { data, isLoading, isError } = useAnimeDetail(id!);

  const anime = data?.data;

  return {
    data,
    isLoading,
    isError,
    anime,
    navigate,
  };
};

export default useDetail;
