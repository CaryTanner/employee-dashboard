import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkButton } from './link-button';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentRef, provideZonelessChangeDetection } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

describe('LinkButton', () => {
  let component: LinkButton;
  let fixture: ComponentFixture<LinkButton>;
  let componentRef: ComponentRef<LinkButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkButton],
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

    fixture = TestBed.createComponent(LinkButton);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('link', '/test');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
