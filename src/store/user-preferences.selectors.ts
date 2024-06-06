// user-preferences.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserPreferences from './user-preferences.reducer';

export const selectUserPreferencesState = createFeatureSelector<fromUserPreferences.State>('userPreferences');

export const selectPreferences = createSelector(
  selectUserPreferencesState,
  (state: fromUserPreferences.State) => state.preferences
);

export const selectTheme = createSelector(
  selectUserPreferencesState,
  (state: fromUserPreferences.State) => state.preferences?.theme
);

export const selectPreferencesError = createSelector(
  selectUserPreferencesState,
  (state: fromUserPreferences.State) => state.error
);
