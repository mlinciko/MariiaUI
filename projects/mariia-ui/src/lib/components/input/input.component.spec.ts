import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { ShowErrorPipe } from '../../pipes/show-error/show-error.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { XmarkIconComponent } from 'mariia-ui';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent, ShowErrorPipe, XmarkIconComponent],
      imports: [ReactiveFormsModule],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the input when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.disabled).toBeTruthy();
  });

  it('should display the label when provided', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const label = fixture.debugElement.query(
      By.css('.mui__label')
    ).nativeElement;
    expect(label.textContent).toContain('Test Label');
  });

  it('should emit onChange event when input value changes', fakeAsync(() => {
    spyOn(component.onChange, 'emit');
    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.value = 'New Value';
    inputEl.dispatchEvent(new Event('change'));
    tick();
    expect(component.onChange.emit).toHaveBeenCalledWith(jasmine.any(Event));
  }));

  it('should show clear button when showClearButton and isEditable are true', () => {
    component.showClearButton = true;
    component.disabled = false; // ensuring isEditable returns true
    fixture.detectChanges();
    const clearBtn = fixture.debugElement.query(By.css('.mui__clear-btn'));
    expect(clearBtn).toBeTruthy();
  });

  it('should clear input when clear button is clicked', () => {
    component.showClearButton = true;
    component.disabled = false;
    fixture.detectChanges();
    component.formControl.setValue('Text');
    fixture.detectChanges();
    const clearBtn = fixture.debugElement.query(By.css('.mui__clear-btn'));
    clearBtn.triggerEventHandler('click', null);
    expect(component.formControl.value).toBe('');
  });
});
