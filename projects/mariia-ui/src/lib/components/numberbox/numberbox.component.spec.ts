import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberboxComponent } from './numberbox.component';

describe('NumberboxComponent', () => {
  let component: NumberboxComponent;
  let fixture: ComponentFixture<NumberboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberboxComponent]
    });
    fixture = TestBed.createComponent(NumberboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
