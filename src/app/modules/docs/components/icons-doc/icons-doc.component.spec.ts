import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDocComponent } from './icons-doc.component';

describe('IconsDocComponent', () => {
  let component: IconsDocComponent;
  let fixture: ComponentFixture<IconsDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsDocComponent]
    });
    fixture = TestBed.createComponent(IconsDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
