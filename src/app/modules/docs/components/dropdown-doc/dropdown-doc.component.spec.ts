import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDocComponent } from './dropdown-doc.component';

describe('DropdownDocComponent', () => {
  let component: DropdownDocComponent;
  let fixture: ComponentFixture<DropdownDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownDocComponent]
    });
    fixture = TestBed.createComponent(DropdownDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
