// user-preferences.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as UserPreferencesActions from './Action.action';
import { UserPreferencesServiceService } from './../app/user-preferences-service.service';

@Injectable()
export class UserPreferencesEffects {
  loadUserPreferences$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserPreferencesActions.loadUserPreferences),
      mergeMap(() =>
        this.userPreferencesService.getPreferences().pipe(
          map(preferences => UserPreferencesActions.loadUserPreferencesSuccess({ preferences })),
          catchError(error => of(UserPreferencesActions.loadUserPreferencesFailure({ error })))
        )
      )
    )
  );

  toggleTheme$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserPreferencesActions.toggleTheme),
      switchMap(action =>
        this.userPreferencesService.updatePreferences(action).pipe(
          map(preferences => UserPreferencesActions.updateUserPreferencesSuccess({ preferences })),
          catchError(error => of(UserPreferencesActions.updateUserPreferencesFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userPreferencesService: UserPreferencesServiceService) { }
}
