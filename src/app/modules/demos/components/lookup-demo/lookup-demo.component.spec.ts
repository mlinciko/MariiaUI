import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupDemoComponent } from './lookup-demo.component';

describe('LookupDemoComponent', () => {
  let component: LookupDemoComponent;
  let fixture: ComponentFixture<LookupDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupDemoComponent]
    });
    fixture = TestBed.createComponent(LookupDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
