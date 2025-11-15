import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SearchState } from './searchTypes';

const initialState: SearchState = {
  query: '',
  page: 1,
  selectedAnimeId: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSelectedAnime(state, action: PayloadAction<number | null>) {
      state.selectedAnimeId = action.payload;
    },
    resetSearch(state) {
      state.query = '';
      state.page = 1;
      state.selectedAnimeId = null;
    },
  },
});

export const { setQuery, setPage, setSelectedAnime, resetSearch } =
  searchSlice.actions;

export default searchSlice.reducer;
