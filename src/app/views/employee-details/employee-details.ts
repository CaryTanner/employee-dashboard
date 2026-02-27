import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { Employee } from '../../service/employee.schema';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeAvatar } from '../../components/employee-avatar/employee-avatar';
import { LinkButton } from '../../components/link-button/link-button';
import { rxResource } from '@angular/core/rxjs-interop';
import { EmployeeService } from '../../service/employee.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-employee-details',
  imports: [EmployeeAvatar, RouterModule, LinkButton],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetails {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private employeeService = inject(EmployeeService);
  employee: WritableSignal<null | Employee> = signal(null);
  employeeIdParam = signal(Number(this.route.snapshot.params?.['id']));
  employeeResource = rxResource({
    params: this.employeeIdParam,
    stream: ({ params: id }) => {
      // if details passed from list just display, otherwise fetch from API
      if (this.employee()?.id === id) {
        return of(this.employee());
      }

      return this.employeeService.getEmployee(id);
    },
  });
  constructor() {
    // Employee details can be passed via router state when navigating to this view.
    const navState = this.router.currentNavigation()?.extras?.state as Employee;
    if (navState?.id) {
      this.employee.set(navState);
    }
  }
}
