import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface InitialState {
  authState: boolean;
}

const initialState: InitialState = {
  authState: false,
};

export const slice = createSlice({
  name: 'auth',
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
        ...payload.auth,
      };
    },
  },
});

export const { updateState } = slice.actions;
export default slice.reducer;
