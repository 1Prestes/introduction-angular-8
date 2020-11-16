import { Error404Component } from './components/error-404/error-404.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavbarComponent, Error404Component],
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  exports: [NavbarComponent],
})
export class CoreModule {}
