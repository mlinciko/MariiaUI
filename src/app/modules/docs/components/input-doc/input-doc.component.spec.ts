import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDocComponent } from './input-doc.component';

describe('InputDocComponent', () => {
  let component: InputDocComponent;
  let fixture: ComponentFixture<InputDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputDocComponent]
    });
    fixture = TestBed.createComponent(InputDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
