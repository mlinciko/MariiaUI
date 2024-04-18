import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDemoComponent } from './dropdown-demo.component';

describe('DropdownDemoComponent', () => {
  let component: DropdownDemoComponent;
  let fixture: ComponentFixture<DropdownDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownDemoComponent]
    });
    fixture = TestBed.createComponent(DropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
