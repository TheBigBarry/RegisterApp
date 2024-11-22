import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrGenerationPage } from './qr-generation.page';

describe('QrGenerationPage', () => {
  let component: QrGenerationPage;
  let fixture: ComponentFixture<QrGenerationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrGenerationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
