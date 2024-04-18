import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxDocComponent } from './checkbox-doc.component';

describe('CheckboxDocComponent', () => {
  let component: CheckboxDocComponent;
  let fixture: ComponentFixture<CheckboxDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxDocComponent]
    });
    fixture = TestBed.createComponent(CheckboxDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
