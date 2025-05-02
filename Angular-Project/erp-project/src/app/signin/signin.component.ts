import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginObject: any = {
    "userName": "",
    "password": ""
  };

  http = inject(HttpClient);
  router = inject(Router);

  // constructor(private http: HttpClient) {

  // }

  onLogin() {
    debugger;
    this.http.post("/api/EmployeeManagement/login",
      this.loginObject, 
      {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'Accept': 'application/json'
        })
      }).subscribe((res: any) => {
        if(res.result) {
          localStorage.setItem('emp',JSON.stringify(res.data));
          this.router.navigateByUrl('dashboard');
        } else {
          alert(res.message);
        }
      })
  }
}
