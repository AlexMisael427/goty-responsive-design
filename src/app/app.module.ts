import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
import {KnobModule} from 'primeng/knob';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TableModule} from 'primeng/table';
import {MegaMenuModule} from 'primeng/megamenu';

import {GalleriaModule} from 'primeng/galleria';


import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { YouTubePlayerModule } from "@angular/youtube-player";


@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    InicioComponent,
    FooterComponent,
    JuegosComponent,
    AddGameComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RouterModule,
    TabMenuModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
    ConfirmDialogModule,
    DialogModule,
    CardModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    KnobModule,
    ToggleButtonModule,
    TableModule,
    MegaMenuModule,
    GalleriaModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
