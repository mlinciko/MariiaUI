import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  standalone: true,
  imports: [CommonModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  @Input() code = '';
  @Input() lang: 'typescript' | 'html' | 'css' | 'bash' = 'typescript';
}
