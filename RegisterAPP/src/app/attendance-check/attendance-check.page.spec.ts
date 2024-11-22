import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceCheckPage } from './attendance-check.page';

describe('AttendanceCheckPage', () => {
  let component: AttendanceCheckPage;
  let fixture: ComponentFixture<AttendanceCheckPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
