import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentActive = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.setActiveTab();
  }

  private setActiveTab() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (e.urlAfterRedirects === '/layout/search-employee') {
          this.currentActive = 0;
        } else {
          this.currentActive = 1;
        }
      }
    });
  }
}
