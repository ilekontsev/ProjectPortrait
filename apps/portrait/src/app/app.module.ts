import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { LayoutModule } from './layout/layout.module';
import { NxWelcomeComponent } from './nx-welcome.component';
@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  declarations: [AppComponent, NxWelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
