import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePickerDocComponent } from './file-picker-doc.component';

describe('FilePickerDocComponent', () => {
  let component: FilePickerDocComponent;
  let fixture: ComponentFixture<FilePickerDocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilePickerDocComponent]
    });
    fixture = TestBed.createComponent(FilePickerDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
