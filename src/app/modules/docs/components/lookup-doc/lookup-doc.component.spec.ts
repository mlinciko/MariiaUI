import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupDocComponent } from './lookup-doc.component';

describe('LookupDocComponent', () => {
  let component: LookupDocComponent;
  let fixture: ComponentFixture<LookupDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookupDocComponent]
    });
    fixture = TestBed.createComponent(LookupDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
