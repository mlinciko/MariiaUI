import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariiaUiComponent } from './mariia-ui.component';

describe('MariiaUiComponent', () => {
  let component: MariiaUiComponent;
  let fixture: ComponentFixture<MariiaUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MariiaUiComponent]
    });
    fixture = TestBed.createComponent(MariiaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
