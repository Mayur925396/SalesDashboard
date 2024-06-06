import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesServiceService {
 
  private preferencesUrl = 'http://localhost:3000/user_preferences'; 

  constructor(private http: HttpClient) {}

  getPreferences(): Observable<any> {
    return this.http.get<any>(this.preferencesUrl);
  }

  updatePreferences(preferences: any): Observable<any> {
    return this.http.put<any>(this.preferencesUrl, preferences);
  };

  
}
