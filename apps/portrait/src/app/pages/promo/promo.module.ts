import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PromoComponent } from './promo.component';
import { promoRoutes } from './promo.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(promoRoutes)],
  declarations: [PromoComponent],
})
export class PromoModule {}
