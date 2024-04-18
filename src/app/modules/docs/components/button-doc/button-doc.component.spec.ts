import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDocComponent } from './button-doc.component';

describe('ButtonDocComponent', () => {
  let component: ButtonDocComponent;
  let fixture: ComponentFixture<ButtonDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDocComponent]
    });
    fixture = TestBed.createComponent(ButtonDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
