import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import debounce from 'lodash.debounce';
import { setPage, setQuery } from '../../../store/search/searchSlice';
import { useSearchAnime } from '../../../hook/useAnime';
import { useNavigate } from 'react-router-dom';

const useHome = () => {
  const dispatch = useAppDispatch();
  const { query, page } = useAppSelector((state) => state.search);

  const hasKeyword = query.length > 0;
  const [localQuery, setLocalQuery] = useState(query);

  const debouncedUpdateQuery = debounce(
    (value: string) => {
      dispatch(setQuery(value));
    },
    hasKeyword ? 250 : 1000 // for ui changes reason
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    debouncedUpdateQuery(value);
  };

  const { data, isLoading, isError } = useSearchAnime(query, page);

  const handleNextPage = () => {
    if (data?.pagination?.has_next_page) {
      dispatch(setPage(page + 1));
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };
  const navigate = useNavigate();

  return {
    handleInputChange,
    handleNextPage,
    handlePrevPage,
    data,
    isLoading,
    isError,
    localQuery,
    query,
    page,
    hasKeyword,
    navigate,
  };
};

export default useHome;
