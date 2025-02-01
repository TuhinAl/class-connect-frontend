import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Coaching Center Management System';
  userName = 'Admin';
  logout() {
    this.userName = 'Super Admin';
  }

  currentYear: number;
  
  constructor() {
    this.currentYear = new Date().getFullYear();
  }
  ngOnInit(): void {}
}