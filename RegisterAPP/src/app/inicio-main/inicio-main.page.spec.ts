import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioMainPage } from './inicio-main.page';

describe('InicioMainPage', () => {
  let component: InicioMainPage;
  let fixture: ComponentFixture<InicioMainPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
