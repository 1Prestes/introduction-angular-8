import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
