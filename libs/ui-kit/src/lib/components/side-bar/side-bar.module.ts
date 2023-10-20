import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [CommonModule, BrowserAnimationsModule],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
})
export class SideBarModule {}
