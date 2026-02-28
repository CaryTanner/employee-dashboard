import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListCard } from '../../components/list-card/list-card';
import { EmployeeService } from '../../service/employee.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, debounceTime, map, startWith } from 'rxjs';
import { SearchInput } from '../../components/search-input/search-input';

@Component({
  selector: 'app-employee-list',
  imports: [ListCard, RouterModule, ReactiveFormsModule, SearchInput],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeList {
  private employeeService = inject(EmployeeService);
  form = new FormControl('');
  employeesResource = rxResource({
    stream: () => this.filterEmployees(),
  });

  filterEmployees() {
    return combineLatest([
      this.form.valueChanges.pipe(debounceTime(300), startWith(this.form.value)),
      this.employeeService.getEmployees(),
    ]).pipe(
      map(([filter, employees]) => {
        if (!employees?.length) return [];
        const formattedFilter = filter?.trim()?.toLowerCase();
        if (!formattedFilter) return employees;

        return employees.filter((employee) =>
          employee.employee_name?.toLowerCase()?.includes(formattedFilter),
        );
      }),
    );
  }
}
