import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {
  DataService,
  IDepartment
} from 'src/app/@Core/data-service/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  departments: IDepartment[] = [];

  locale: string;

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.locale = this.translateService.currentLang;

    this.initForm();

    this.getDepartments();

    this.onLangChange();
  }

  private initForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      departmentId: ['', Validators.required],
      employeeCode: ['', [Validators.required]],
      birthday: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  private getDepartments() {
    this.departments = this.dataService.Departments;
  }

  onSubmit() {
    console.log(this.employeeForm);
    if (this.isFormValid) {
      console.log('do Great things');
    }
  }

  private isFormValid(): boolean {
    this.employeeForm.markAllAsTouched();

    return this.employeeForm.touched && this.employeeForm.valid;
  }

  private onLangChange() {
    this.translateService.onLangChange.subscribe(
      langObj => (this.locale = langObj.lang)
    );
  }
}
