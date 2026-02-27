import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListCard } from '../../components/list-card/list-card';
import { EmployeeService } from '../../service/employee.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-employee-list',
  imports: [ListCard, RouterModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeList {
  private employeeService = inject(EmployeeService);
  employeesResource = rxResource({
    stream: () => this.employeeService.getEmployees(),
  });
}
