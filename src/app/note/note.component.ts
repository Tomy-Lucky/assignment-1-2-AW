import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


export class Result{
  constructor(public inputDate: string | undefined,
              public inputDistance: number | undefined,
              public inputTime: string | undefined
  ) {
  }
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  constructor() { }
  inputDate: string | undefined;
  inputTime: string | undefined;
  inputDistance: number | undefined;
  results: Result [] = [];

  save(): void{
    this.results.push(new Result(this.inputDate, this.inputDistance, this.inputTime));
  }

  printResult(form: NgForm): void{
    console.log(form);
  }

}
