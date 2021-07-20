import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarMensajesComponent } from './enviar-mensajes.component';

describe('EnviarMensajesComponent', () => {
  let component: EnviarMensajesComponent;
  let fixture: ComponentFixture<EnviarMensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviarMensajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
