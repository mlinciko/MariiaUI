/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  ChangeDetectionStrategy,
  Component,
  EmbeddedViewRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TPopupButton } from './popup';

@Component({
  selector: 'mui-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupComponent implements OnChanges {
  /*Input params */
  @Input() title = '';
  @Input() buttons: TPopupButton[] = [];
  @Input() showCloseBtn = true;
  @Input() visible = false;
  @Input() width = 400;
  @Input() height = 200;
  @Input() top = 40;
  @Input() left = 38;

  /*Output events */
  @Output() onPopupClose: EventEmitter<void> = new EventEmitter();
  @Output() visibleChange = new EventEmitter<boolean>();

  @ViewChild('popup') popup!: TemplateRef<any>;
  rootElement!: HTMLElement;
  view: EmbeddedViewRef<any> | null = null;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible'].currentValue) this.createPopup();
    else this.destroyPopup();
  }

  createPopup(): void {
    this.rootElement = this.renderer.selectRootElement('.mui-root');
    this.view = this.popup.createEmbeddedView(null);

    this.view.detectChanges();

    this.view.rootNodes.forEach(node => {
      this.renderer.appendChild(this.rootElement, node);
    });
  }

  destroyPopup(): void {
    if (!this.view) return;

    this.view.rootNodes.forEach(node => {
      this.renderer.removeChild(this.rootElement, node);
    });
    this.view = null;
  }

  closeDialog(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.onPopupClose.emit();
  }
}
