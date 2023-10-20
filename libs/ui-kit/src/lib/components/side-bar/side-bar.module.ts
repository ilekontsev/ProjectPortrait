import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SideBarComponent } from './side-bar.component';
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
})
export class SideBarModule {}
