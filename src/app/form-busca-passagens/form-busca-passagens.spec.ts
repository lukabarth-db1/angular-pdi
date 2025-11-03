import { TestBed } from '@angular/core/testing';
import { FormBuscaPassagens } from './form-busca-passagens';

describe('FormBuscaPassagens', () => {
    it('should create', () => {
      TestBed.configureTestingModule({imports: [FormBuscaPassagens]});

      const fixture = TestBed.createComponent(FormBuscaPassagens);
      const component = fixture.componentInstance;
      expect(component).toBeTruthy();
    });

    it('should have <mat-button-toggle> with "Ida e volta" and "Somente Ida"', () => {
      const fixture = TestBed.createComponent(FormBuscaPassagens);
      fixture.detectChanges();

      const formElement: HTMLElement = fixture.nativeElement;

      const matButtonToggle = formElement.querySelector('mat-button-toggle-group');
      expect(matButtonToggle).toBeTruthy();

      const matButtonToggles = matButtonToggle?.querySelectorAll('mat-button-toggle');
      expect(matButtonToggles?.length).toBe(2);

      const options = Array.from(matButtonToggles || []).map(toggle => toggle.textContent?.trim());
      expect(options).toContain('Ida e Volta');
      expect(options).toContain('Somente Ida');
    });

    it('should have input fields for "Origem" and "Destino"', () => {
      const fixture = TestBed.createComponent(FormBuscaPassagens);
      fixture.detectChanges();

      const formElement: HTMLElement = fixture.nativeElement;

      const formFields = formElement.querySelectorAll('mat-form-field');
      expect(formFields.length).toBe(2);

      const labels = Array.from(formFields).map(field => field.querySelector('mat-label')?.textContent);
      expect(labels).toContain('Origem');
      expect(labels).toContain('Destino');
    });
  });
