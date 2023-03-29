import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { Food } from '@/types/models';
import { createFoods } from '@/testing/models';

export interface InitialState {
  foods: Array<Food>;
}

const initialState: InitialState = {
  foods: createFoods(10),
};

export const slice = createSlice({
  name: 'nutrition',
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
        ...payload.nutrition,
      };
    },
  },
});

export const { updateState } = slice.actions;
export default slice.reducer;
