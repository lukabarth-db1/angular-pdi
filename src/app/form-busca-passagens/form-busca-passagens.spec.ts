import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscaPassagens } from './form-busca-passagens';

describe('FormBuscaPassagens', () => {
  let component: FormBuscaPassagens;
  let fixture: ComponentFixture<FormBuscaPassagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBuscaPassagens]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuscaPassagens);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
