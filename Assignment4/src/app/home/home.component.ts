import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  logout() {
    // Clear any user session data if stored
    localStorage.removeItem('loggedInUser');

    // Navigate to the login page
    this.router.navigate(['/login']);
  }
}
