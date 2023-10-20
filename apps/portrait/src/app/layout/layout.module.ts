import { NgModule } from '@angular/core';
import { SideBarModule } from '@portrait/ui-kit';

import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [SideBarModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
