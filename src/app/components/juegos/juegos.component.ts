import { Component, OnInit, ViewChild } from '@angular/core';
import { GAMES } from 'src/app.constants';
import { GameDetailComponent } from '../game-detail/game-detail.component';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  games: any [] = [];
  displayModal: boolean = false;
  displayImageModal: boolean = false;
  modalHeader: string = "";
  gameSelected: any = {};

  @ViewChild('detailComponent') detailComponent: GameDetailComponent;
  checked: boolean = true;


  constructor() { }

  ngOnInit(): void {
    this.games = [...GAMES];
    
  }
  showImageModalDialog(game:any){
    this.displayImageModal = true;
    this.gameSelected = game;
  }

  showModalDialog(game:any){
    this.displayModal = true;
    this.modalHeader = game.name;
    this.gameSelected = game;
    this.detailComponent.gameSelected = this.gameSelected;
  }

  closeModal(){
    this.detailComponent.ngOnDestroy();
    this.displayModal = false;
    this.displayImageModal= false;
  }



}
