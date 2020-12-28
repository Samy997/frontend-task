import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [LayoutComponent, NavbarComponent, FooterComponent];

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule,
    // FontAwesomeModule,
    TranslateModule.forChild()
  ],
  declarations: [...COMPONENTS],
  exports: [LayoutComponent]
})
export class LayoutModule {}
