import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin/admin.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userPreferencesReducer } from 'src/store/user-preferences.reducer';
import {MatIconModule} from '@angular/material/icon';
// import { UserPreferencesEffects } from 'src/store/user-preferences.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCVbACGxtuXxmxpP4gsdKhoHHS04qe_oWY",
      authDomain: "salesdashboard-288ff.firebaseapp.com",
      projectId: "salesdashboard-288ff",
      storageBucket: "salesdashboard-288ff.appspot.com",
      messagingSenderId: "411755399724",
      appId: "1:411755399724:web:5ee0cf74d3bbe3d1435f89",
      measurementId: "G-ETP22XP15K"
    }),
    AngularFireAuthModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({ userPreferences: userPreferencesReducer }),
    // EffectsModule.forRoot([UserPreferencesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
