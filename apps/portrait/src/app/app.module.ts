import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LayoutModule } from './layout/layout.module';
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
