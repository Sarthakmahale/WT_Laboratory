import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // If the user is already logged in, redirect them to the home page
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.router.navigate(['/home']);
    }
  }

  loginUser(event: Event) {
    event.preventDefault();
    
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    const storedUser = localStorage.getItem('registeredUser');

    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        // Save logged-in status
        localStorage.setItem('loggedInUser', username);
        
        // Remove registration details
        localStorage.removeItem('registeredUser'); 
        
        alert('Login successful! Registration data cleared.');
        
        // Redirect to home page
        this.router.navigate(['/home']);
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('No user registered. Please register first.');
      this.router.navigate(['/register']);
    }
  }
}
