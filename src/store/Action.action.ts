import { createAction, props } from '@ngrx/store';

export const loadUserPreferences = createAction('[User Preferences] Load Preferences');
export const loadUserPreferencesSuccess = createAction('[User Preferences] Load Preferences Success', props<{ preferences: any }>());
export const loadUserPreferencesFailure = createAction('[User Preferences] Load Preferences Failure', props<{ error: any }>());

export const toggleTheme = createAction('[User Preferences] Toggle Theme');
export const updateUserPreferencesSuccess = createAction('[User Preferences] Update Preferences Success', props<{ preferences: any }>());
export const updateUserPreferencesFailure = createAction('[User Preferences] Update Preferences Failure', props<{ error: any }>());
