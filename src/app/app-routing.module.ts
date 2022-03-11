import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { Web19201Component } from './web19201/web19201.component';

export const routes: Routes = [
  { path: '', redirectTo: 'web19201', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'web19201', component: Web19201Component, data: { text: "Web 1920 \u2013 1" } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
