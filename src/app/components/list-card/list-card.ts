import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Employee } from '../../service/employee.schema';
import { EmployeeAvatar } from '../employee-avatar/employee-avatar';

@Component({
  selector: 'app-list-card',
  imports: [RouterModule, EmployeeAvatar],
  templateUrl: './list-card.html',
  styleUrl: './list-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCard {
  employee = input.required<Employee>();
  link = computed<string>(() => {
    const employee = this.employee();
    return `/employee/${employee.id}`;
  });
  ariaLabel = computed<string>(() => {
    const employee = this.employee();
    return `Se detaljer för ${employee.employee_name}`;
  });
}
