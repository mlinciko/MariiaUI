import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePickerDemoComponent } from './file-picker-demo.component';

describe('FilePickerDemoComponent', () => {
  let component: FilePickerDemoComponent;
  let fixture: ComponentFixture<FilePickerDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilePickerDemoComponent]
    });
    fixture = TestBed.createComponent(FilePickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
