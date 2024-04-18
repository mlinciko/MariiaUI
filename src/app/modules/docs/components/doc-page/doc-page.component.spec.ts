import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPageComponent } from './doc-page.component';

describe('DocPageComponent', () => {
  let component: DocPageComponent;
  let fixture: ComponentFixture<DocPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocPageComponent]
    });
    fixture = TestBed.createComponent(DocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
