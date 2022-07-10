import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { JuegosComponent } from './components/juegos/juegos.component';

const routes: Routes = [
  { path: 'Home', component : InicioComponent },
  { path: 'Games', component : JuegosComponent },
  { path: 'Add-Game', component : AddGameComponent },
  { path: 'Game-Detail/:id', component : GameDetailComponent },
  { path: '**', pathMatch : 'full', redirectTo: 'Home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
