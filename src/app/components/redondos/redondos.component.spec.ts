import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedondosComponent } from './redondos.component';

describe('RedondosComponent', () => {
  let component: RedondosComponent;
  let fixture: ComponentFixture<RedondosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedondosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedondosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
