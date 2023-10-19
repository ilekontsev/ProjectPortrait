import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { SideBarModule } from '@portrait/ui-kit';

@NgModule({
  imports: [SideBarModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
