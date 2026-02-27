import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import {
  Employee,
  EmployeeListResponseSchema,
  EmployeeSingleResponseSchema,
} from './employee.schema';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'https://dummy.restapiexample.com/api/v1';
  private http = inject(HttpClient);

  // API data is relatively static, so we can cache it
  private employeesCache$: Observable<Employee[]> | null = null;

  getEmployees(): Observable<Employee[]> {
    if (!this.employeesCache$) {
      this.employeesCache$ = this.http.get(`${this.baseUrl}/employees`).pipe(
        map((response) => {
          const result = EmployeeListResponseSchema.safeParse(response);
          if (!result.success) {
            this.employeesCache$ = null; // if error on fetch, null cache to retry on next request
            throw new Error('Invalid API response');
          }
          return result.data.data;
        }),
        shareReplay({ bufferSize: 1, refCount: false }),
      );
    }
    return this.employeesCache$;
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get(`${this.baseUrl}/employee/${id}`).pipe(
      map((response) => {
        const result = EmployeeSingleResponseSchema.safeParse(response);
        if (!result.success) {
          throw new Error('Invalid API response');
        }
        return result.data.data;
      }),
    );
  }
}
