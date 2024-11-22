import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CredentialPage } from './credential.page';

describe('CredentialPage', () => {
  let component: CredentialPage;
  let fixture: ComponentFixture<CredentialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
