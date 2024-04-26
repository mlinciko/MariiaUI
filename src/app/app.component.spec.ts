import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { MariiaUiModule, NotificationService } from 'mariia-ui';
import { TranslationService } from './services/translation.service';

fdescribe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MariiaUiModule],
      declarations: [AppComponent, HeaderComponent],
      providers: [
        NotificationService,
        { provide: TranslationService, useClass: TranslationServiceStub}
      ],
    })
  );

  fit('should disable the input when disabled is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

class TranslationServiceStub {
  translate(): string {
    return '';
  }
}
