import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  EmployeeListResponse,
  EmployeeListResponseSchema,
  EmployeeSingleResponse,
  EmployeeSingleResponseSchema,
} from './employee.schema';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'https://dummy.restapiexample.com/api/v1';
  private http = inject(HttpClient);

  getEmployees(): Observable<EmployeeListResponse> {
    return this.http
      .get(`${this.baseUrl}/employees`)
      .pipe(map((response) => EmployeeListResponseSchema.parse(response)));
  }

  getEmployee(id: number): Observable<EmployeeSingleResponse> {
    return this.http
      .get(`${this.baseUrl}/employee/${id}`)
      .pipe(map((response) => EmployeeSingleResponseSchema.parse(response)));
  }
}
