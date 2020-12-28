import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // searchIcon = faSearch;

  ukFlag = 'assets/pictures/uk.png';
  egFlag = 'assets/pictures/eg.png';

  locale: string;

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.locale = this.translateService.currentLang;

    this.onLangChange();
  }

  private onLangChange(): void {
    this.translateService.onLangChange.subscribe(langObj => {
      this.locale = langObj.lang;

      this.changeLayoutDirection();
    });
  }

  private changeLayoutDirection(): void {
    if (this.locale === 'ar') {
      document.getElementsByTagName('body')[0].className = 'ar rtl';
    } else {
      document.getElementsByTagName('body')[0].className = 'en';
    }
  }

  changeLang(): void {
    if (this.locale === 'ar') {
      this.translateService.use('en');
    } else {
      this.translateService.use('ar');
    }
  }
}
