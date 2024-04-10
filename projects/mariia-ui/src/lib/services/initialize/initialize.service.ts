import {
  ApplicationRef,
  ComponentFactoryResolver,
  Injectable,
  Injector,
  RendererFactory2,
} from '@angular/core';
import { NotificationComponent } from '../../components/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class InitializeService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private rendererFactory: RendererFactory2
  ) {}

  renderInitialComponents(): void {
    const renderer = this.rendererFactory.createRenderer(null, null);
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(
        NotificationComponent
      );
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    const hostElement = renderer.createElement('div');
    renderer.addClass(hostElement, 'mui-root');
    renderer.appendChild(document.body, hostElement);
    renderer.appendChild(hostElement, componentRef.location.nativeElement);
  }
}
