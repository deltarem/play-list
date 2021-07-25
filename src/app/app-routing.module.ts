import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayListComponent } from './play-list/play-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'playlist', component: PlayListComponent },
  { path: '',   redirectTo: '/playlist', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
