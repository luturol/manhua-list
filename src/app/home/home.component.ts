import { Component, OnInit } from '@angular/core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons/';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGithub = faGithubAlt;
  faSignOUt = faSignOutAlt;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public logout() {
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  }
}
