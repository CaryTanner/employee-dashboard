import { Routes } from '@angular/router';
import { EmployeeList } from './views/employee-list/employee-list';
import { EmployeeDetails } from './views/employee-details/employee-details';
import { App } from './app';

export const routes: Routes = [
  {
    path: '',
    component: App,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'employee-list' },
      { path: 'employee-list', component: EmployeeList },
      {
        path: 'employee/:id',
        component: EmployeeDetails,
      },
    ],
  },
];
