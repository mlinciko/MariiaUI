import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveIconComponent } from './save-icon.component';

describe('SaveIconComponent', () => {
  let component: SaveIconComponent;
  let fixture: ComponentFixture<SaveIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveIconComponent]
    });
    fixture = TestBed.createComponent(SaveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
