import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userRole: string | null=null;
  constructor(private auth:AngularFireAuth, private router:Router) { 

  }
  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
      const idTokenResult = await userCredential.user?.getIdTokenResult();
      console.log(idTokenResult)
      this.userRole = idTokenResult?.claims['role'] || 'user'; // Mock role assignment
      this.router.navigate(['/admin']);
    } catch (error) {
      console.error('Login error:', error);
      alert('You are not Admin.Only admins can access this resource.')
      
    }
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['/login']);
  }

  get currentUser() {
    return this.auth.authState;
  }

  get role() {
    return this.userRole;
  }

  
}
