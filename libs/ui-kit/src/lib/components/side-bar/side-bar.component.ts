import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import {
  DEFAULT_EXPAND_WIDTH_PANEL,
  DEFAULT_WIDTH_PANEL,
} from './size-panel.constants';
import {
  animate,
  style,
  transition,
  trigger,
  state,
} from '@angular/animations';

@Component({
  selector: 'portrait-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('false', style({ width: DEFAULT_WIDTH_PANEL })),
      state('true', style({ width: DEFAULT_EXPAND_WIDTH_PANEL })),
      transition('false <=> true', animate('0.25s linear')),
    ]),
  ],
})
export class SideBarComponent {
  @Output() expandPanel = new EventEmitter<boolean>();

  public isButton = false;
  public isExpandedPanel = false;

  public onExpandPanel(): void {
    this.isExpandedPanel = !this.isExpandedPanel;
    this.expandPanel.emit(this.isExpandedPanel);
  }
}
