/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from '@angular/core';
import { SliderItemComponent } from './slider-item/slider-item.component';
import { TNavigationDot } from './slider';

@Component({
  selector: 'mui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements AfterContentInit {
  /*Input params */
  @Input() showDots = true;
  @Input() width = '100%';
  @Input() slideWidth = 200;
  @Input() gap = 20;

  /*Output events */
  @Output() onSlideActiveChange: EventEmitter<number> = new EventEmitter();

  @ContentChildren(SliderItemComponent)
  sliderItems!: QueryList<SliderItemComponent>;

  currentIndex = 0;

  ngAfterContentInit(): void {
    const activeItem = this.sliderItems.find(item => item.isActive);
    if (!activeItem) this.setActiveItem(this.sliderItems.first);
  }

  setActiveItem(itemToSetActive: SliderItemComponent): void {
    this.sliderItems.forEach(item => (item.isActive = false));
    itemToSetActive.isActive = true;
  }

  goToSlide(index: number): void {
    const activeItem = this.sliderItems.get(index);
    if (!activeItem) return;

    this.currentIndex = index;
    this.setActiveItem(activeItem);
    this.onSlideActiveChange.emit(index);
  }

  get sliderNavigationDots(): TNavigationDot[] {
    return this.sliderItems.map((item, index) => ({
      index,
      isActive: item.isActive,
    }));
  }

  get dotsWidth(): string {
    const dotsAmount = this.sliderNavigationDots.length;
    return `${dotsAmount * 10 + (dotsAmount - 1) * 10}px`;
  }

  get translateX(): string {
    return `translateX(calc(-${this.currentIndex} * ${this.slideWidth + this.gap}px))`;
  }
}
