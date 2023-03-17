import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutPagesComponent } from './admin-layout-pages.component';

describe('AdminLayoutPagesComponent', () => {
  let component: AdminLayoutPagesComponent;
  let fixture: ComponentFixture<AdminLayoutPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLayoutPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLayoutPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
