import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-accordion-demo',
  templateUrl: './accordion-demo.component.html',
  styleUrls: ['./accordion-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionDemoComponent {
  title = 'Accordion';
  componentCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
  })
  export class DemoComponent {}`;
  templateCode = `<mui-accordion>
  <mui-accordion-item [label]="'About Us'" [isExpanded]="true">
    Our journey began over ten years ago with a small team of enthusiasts.
    Today, we are a leading developer of software and IT solutions, helping
    companies around the world achieve technological breakthroughs.
  </mui-accordion-item>
  <mui-accordion-item [label]="'Our Products'">
    We offer a wide range of products, including innovative data processing
    platforms, software development tools, and cutting-edge cybersecurity
    solutions.
  </mui-accordion-item>
  <mui-accordion-item [label]="'Services'">
    Our company provides a full spectrum of IT services, from consulting and
    planning to system integration and support. We strive to ensure that each
    of our solutions is perfectly tailored to our clients' needs.
  </mui-accordion-item>
</mui-accordion>`;
}
