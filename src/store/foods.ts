import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Food } from '@/types/models';
import { getFoods } from '@/lib/foods';

export interface InitialState {
  foods: Array<Food>;
}

const initialState: InitialState = {
  foods: [],
};

export const slice = createSlice({
  name: 'foods',
  initialState,
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, { payload }) => {
      return {
        ...state,
        ...payload.foods,
      };
    },
  },
});

export const { updateState } = slice.actions;
export default slice.reducer;
