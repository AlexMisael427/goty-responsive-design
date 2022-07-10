import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { addGame } from 'src/app.constants';
import {ConfirmationService} from 'primeng/api';
import { gameModel } from 'src/app/shared/game.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  name :string;
  developer :string;
  description :string;
  url :string;
  display: boolean = false;
  displayModal: boolean = false;
  game : gameModel = {};
  validacion:boolean = true;

  intervalo : any;

  @ViewChild('editForm') editForm: NgForm;

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
  }

  openConfirmation() {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to add this game?',
      accept: () => {
        //Actual logic to perform a confirmation

      }
    });
  }

  save(){
    this.confirmationService.close();
    addGame(this.game);
    setTimeout(() => {
      this.displayModal = true;
      
    }, 500);
  }

  onSuccess(){
    this.game = {};
    this.displayModal = false;
  }

  checkURLYoutube(){
    const videoURL: string = this.editForm.controls.videoUrl.value;
      if (videoURL) {
        if (!videoURL.includes('https://www.youtube.com/watch?v=')) {
          this.validacion = false;
        }
      }else{
        this.validacion = true;
      }
  }

}
