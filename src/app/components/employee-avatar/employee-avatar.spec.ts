import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAvatar } from './employee-avatar';
import { ComponentRef, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('EmployeeAvatar', () => {
  let component: EmployeeAvatar;
  let componentRef: ComponentRef<EmployeeAvatar>;
  let fixture: ComponentFixture<EmployeeAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAvatar],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeAvatar);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initials()', () => {
    it('should return "--" when employeeName is undefined', () => {
      fixture.detectChanges();
      expect(component.initials()).toBe('--');
    });

    it('should return two initials for a full name', () => {
      componentRef.setInput('employeeName', 'Alice Smith');
      fixture.detectChanges();
      expect(component.initials()).toBe('AS');
    });

    it('should return initials in uppercase', () => {
      componentRef.setInput('employeeName', 'alice smith');
      fixture.detectChanges();
      expect(component.initials()).toBe('AS');
    });
  });
});
