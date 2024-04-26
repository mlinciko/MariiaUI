import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberboxDocComponent } from './numberbox-doc.component';

describe('NumberboxDocComponent', () => {
  let component: NumberboxDocComponent;
  let fixture: ComponentFixture<NumberboxDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberboxDocComponent],
    });
    fixture = TestBed.createComponent(NumberboxDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
