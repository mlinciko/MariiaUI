/* eslint-disable @angular-eslint/no-output-on-prefix */
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
} from '@angular/core';
import { Tab } from './tabs';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'mui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  /*Output events */
  @Output() onSelectionChange: EventEmitter<Tab> = new EventEmitter();

  selectTab(activeTab: TabComponent): void {
    this.tabs.forEach(item => {
      item.isActive = false;
    });
    activeTab.isActive = true;

    this.onSelectionChange.emit({
      id: activeTab.id,
      label: activeTab.label,
      isActive: activeTab.isActive,
    });
  }

  ngAfterContentInit(): void {
    const activeTab = this.tabs.find(item => item.isActive) || this.tabs.first;
    this.selectTab(activeTab);
  }
}
