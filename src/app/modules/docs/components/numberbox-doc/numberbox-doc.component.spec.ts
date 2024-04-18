import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NunberboxDocComponent } from './numberbox-doc.component';

describe('NunberboxDocComponent', () => {
  let component: NunberboxDocComponent;
  let fixture: ComponentFixture<NunberboxDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NunberboxDocComponent]
    });
    fixture = TestBed.createComponent(NunberboxDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
