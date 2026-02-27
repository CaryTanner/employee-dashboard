import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAvatar } from './employee-avatar';

describe('EmployeeAvatar', () => {
  let component: EmployeeAvatar;
  let fixture: ComponentFixture<EmployeeAvatar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAvatar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAvatar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
