// user-preferences.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as UserPreferencesActions from './Action.action';

export interface State {
  preferences: any;
  error: any;
}

export const initialState: State = {
  preferences: null,
  error: null
};

export const userPreferencesReducer = createReducer(
  initialState,
  on(UserPreferencesActions.loadUserPreferencesSuccess, (state, { preferences }) => ({
    ...state,
    preferences
  })),
  on(UserPreferencesActions.loadUserPreferencesFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(UserPreferencesActions.updateUserPreferencesSuccess, (state, { preferences }) => ({
    ...state,
    preferences
  })),
  on(UserPreferencesActions.updateUserPreferencesFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(UserPreferencesActions.toggleTheme, state => {
    const newTheme = state.preferences?.theme === 'dark' ? 'light' : 'dark';
    return {
      ...state,
      preferences: { ...state.preferences, theme: newTheme }
    };
  })
);
