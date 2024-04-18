import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsRootComponent } from './docs-root.component';

describe('DocsRootComponent', () => {
  let component: DocsRootComponent;
  let fixture: ComponentFixture<DocsRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocsRootComponent]
    });
    fixture = TestBed.createComponent(DocsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
