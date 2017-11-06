import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosApiComponent } from './servicios-api.component';

describe('ServiciosApiComponent', () => {
  let component: ServiciosApiComponent;
  let fixture: ComponentFixture<ServiciosApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
