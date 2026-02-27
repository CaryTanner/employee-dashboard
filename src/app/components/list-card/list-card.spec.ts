import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCard } from './list-card';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentRef, provideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../service/employee.schema';

const mockEmployee: Employee = {
  id: 1,
  employee_name: 'Alice Smith',
  employee_salary: '50000',
  employee_age: '30',
  profile_image: '',
};

describe('ListCard', () => {
  let component: ListCard;
  let fixture: ComponentFixture<ListCard>;
  let componentRef: ComponentRef<ListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCard],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { id: '123' } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCard);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('employee', mockEmployee);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
