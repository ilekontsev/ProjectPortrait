import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarModule } from './components';

const modules = [SideBarModule];

@NgModule({
  imports: [CommonModule, ...modules],
  declarations: [],
  exports: [...modules],
})
export class UiKitModule {}
