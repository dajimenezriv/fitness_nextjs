import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import auth from './auth';
import nutrition from './nutrition';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () =>
  configureStore({
    reducer: {
      auth,
      nutrition,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const selectState = (state: AppState) => state;
export const wrapper = createWrapper<AppStore>(makeStore);
