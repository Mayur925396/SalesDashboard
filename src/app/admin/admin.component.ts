import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as fromUserPreferences from '../../store/user-preferences.selectors';
import * as UserPreferencesActions from '../../store/Action.action';
import { UserPreferences } from 'src/model/user-preferences.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // userPreferences$: Observable<any>;
  // preferencesError$: Observable<any>;
  theme$: Observable<string>;
  isDarkMode: boolean = false;
 

  constructor(private authService: AuthService, private store: Store) {
    this.store.dispatch(UserPreferencesActions.loadUserPreferences());
    this.theme$ = this.store.select(fromUserPreferences.selectTheme);


  }

  ngOnInit() {
   
    this.theme$.subscribe(theme => {
      if (theme === 'dark') {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  }

  toggletheme(): void {
    this.store.dispatch(UserPreferencesActions.toggleTheme());
  }

  logout() {
    this.authService.logout();
  }
}
