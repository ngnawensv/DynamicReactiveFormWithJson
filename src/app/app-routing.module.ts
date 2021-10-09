import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/**
 * We configure the Routing for our Angular app in app-routing.module.ts.
 */
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
