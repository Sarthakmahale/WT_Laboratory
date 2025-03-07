import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // If user is logged in, redirect them to home instead of registration
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.router.navigate(['/home']);
    }

    const userExists = localStorage.getItem('registeredUser');
    if (userExists) {
      this.router.navigate(['/login']);
    }
  }

  registerUser(event: Event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Dummy user data (In real apps, send this data to a backend)
    const userData = {
      firstName: (document.getElementById('firstName') as HTMLInputElement).value,
      lastName: (document.getElementById('lastName') as HTMLInputElement).value,
      username: (document.getElementById('username') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value
    };

    // Save user data in localStorage
    localStorage.setItem('registeredUser', JSON.stringify(userData));

    // Redirect to login
    this.router.navigate(['/login']);
  }
}
