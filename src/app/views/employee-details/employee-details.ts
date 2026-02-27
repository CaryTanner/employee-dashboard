import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { Employee } from '../../service/employee.schema';
import { Router, RouterModule } from '@angular/router';
import { EmployeeAvatar } from '../../components/employee-avatar/employee-avatar';
import { LinkButton } from '../../components/link-button/link-button';

const mock = {
  id: 1,
  employee_name: 'Tiger Nixon',
  employee_salary: '320800',
  employee_age: '61',
  profile_image: '',
};

@Component({
  selector: 'app-employee-details',
  imports: [EmployeeAvatar, RouterModule, LinkButton],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetails {
  private router = inject(Router);
  employee: WritableSignal<null | Employee> = signal(mock);
  constructor() {
    // Employee details are passed via router state when navigating to this view.
    const navState = this.router.currentNavigation()?.extras?.state as Employee;
    if (navState?.id) {
      this.employee.set(navState);
    }
  }
}
