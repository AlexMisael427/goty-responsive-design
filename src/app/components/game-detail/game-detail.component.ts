import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { findById, findGameTotalRank } from 'src/app.constants';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit, OnDestroy {

  @Input() gameSelected : any;
   gameRoute : any;


  @ViewChild('contenedor') contenedor: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  gameId : number;
  totalVotes :number ;
  voteOfTheGame :number = 0;

  constructor(
    private route: ActivatedRoute,
  ) { 
    this.gameId = this.route.snapshot.params.id;
    this.gameRoute = findById(Number(this.gameId));
  
  }


  ngOnInit(): void {

      this.totalVotes= findGameTotalRank();
      this.voteOfTheGame = this.gameRoute.value;
  }

  ngOnDestroy(): void {
    this.gameRoute = {};
  }

   public obtainTotalVotes(votes:any){
    this.totalVotes= votes;
  }

}
