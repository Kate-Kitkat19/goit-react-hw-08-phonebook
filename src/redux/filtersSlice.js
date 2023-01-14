import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(_, action) {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;
