import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SideBarComponent],
  exports: [SideBarComponent],
})
export class SideBarModule {}
