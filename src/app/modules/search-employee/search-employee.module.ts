import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEmployeeComponent } from './search-employee.component';
import { SearchEmployeeRoutingModule } from './search-employee-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, SearchEmployeeRoutingModule, TranslateModule],
  declarations: [SearchEmployeeComponent]
})
export class SearchEmployeeModule {}
