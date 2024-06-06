import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user: any;
  public FrmSub: boolean = false;
  public Token: string = "";
  public sample: boolean = true;
  public ErrorMsg: string | null = null;
  constructor(private fb: FormBuilder, private route: Router, private auth: AuthService) {
    this.user = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{8,}$/)]]
    })
  }

  ngOnInit() {

  }
  get f() {
    return this.user.controls;
  }
  onLogin() {

    this.FrmSub = true;
    if (this.user.valid) {
      this.auth.login(this.user.value.username, this.user.value.password)
        .then(() => {
          this.route.navigateByUrl('/admin');
        })
        .catch(error => {
          console.error(error);
        
        });
      this.FrmSub = false;
      this.user.reset()
    }
  }
 
  onsignup() {
   this.route.navigate(['register']);
  }
}
