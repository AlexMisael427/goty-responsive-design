import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { addVotes, findGame, findGameTotalRank, GAMES } from 'src/app.constants';
import { gameModel } from 'src/app/shared/game.model';
import { GameDetailComponent } from '../game-detail/game-detail.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit,OnDestroy {

  displayModal: boolean = false;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Votes';
  showYAxisLabel = true;
  yAxisLabel = 'Games';

  colorScheme = 'vivid'

  intervalo : any;
  gameSelected:any = {};
  games: any[]= [];
  images: any[] = [];
  votes:any={};
  _activeIndex: number = 2;
  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];


  @ViewChild('detailComponent') detailComponent: GameDetailComponent;


  constructor() {
      this.simularVotacion();
     
     
      this.cargarImganes();
      
  }

  async cargarImganes(){
    await this.games.forEach(juego=>{
      this.images.push(juego.url);
    });
    console.log('imgaes',this.images);
    
  }

  ngOnInit(): void {

  }



  get activeIndex(): number {
      return this._activeIndex;
  }

  set activeIndex(newValue) {
      if (this.images && 0 <= newValue && newValue <= (this.images.length - 1)) {
          this._activeIndex = newValue;
      }
  }

  onSelect(event) {  
    if (event.name) {
      this.gameSelected = findGame(event.name);
    }else{
      this.gameSelected = findGame(event);
    }
    this.detailComponent.gameSelected = this.gameSelected;
    this.detailComponent.totalVotes = this.votes;
    clearInterval(this.intervalo);
    this.displayModal = true;

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }


  closeModal(){
    this.detailComponent.ngOnDestroy();
    this.displayModal = false;
    this.simularVotacion();

  }

  simularVotacion(){
    this.intervalo = setInterval(() => {

      for (var i = 0; i < GAMES.length; i++) {
        let rndInt = Math.floor(Math.random() * 6);
        addVotes(i, GAMES[i].value + rndInt)
         this.votes = findGameTotalRank();
      }
      this.games = [...GAMES];
    }, 1500);
  }

}
