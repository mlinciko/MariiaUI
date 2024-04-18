import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocComponent } from './tab-doc.component';

describe('TabDocComponent', () => {
  let component: TabDocComponent;
  let fixture: ComponentFixture<TabDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabDocComponent]
    });
    fixture = TestBed.createComponent(TabDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
