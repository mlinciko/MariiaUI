import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-slider-demo',
  templateUrl: './slider-demo.component.html',
  styleUrls: ['./slider-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderDemoComponent {
  title = 'Slider';
  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {
    width = '800px';
    slideWidth = 200;
  }
  `;
  templateCode = `
<mui-slider [width]="width" [slideWidth]="slideWidth">
  <mui-slider-item>
    <div class="slider-element-1"></div>
  </mui-slider-item>
  <mui-slider-item>
    <div class="slider-element-2"></div>
  </mui-slider-item>
  <mui-slider-item>
    <div class="slider-element-3"></div>
  </mui-slider-item>
</mui-slider>`;
  cssCode = `
  .slider-element-1, .slider-element-2, .slider-element-3 {
    width: 200px;
    height: 100px;
  }
  
  .slider-element-1 {
    background-color: aquamarine;
  }
  
  .slider-element-2 {
    background-color:cadetblue;
  }
  
  .slider-element-3 {
    background-color:wheat;
  }`;

  width = '800px';
  slideWidth = 200;
}
