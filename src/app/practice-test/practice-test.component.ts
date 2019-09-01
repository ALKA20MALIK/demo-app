import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-test',
  templateUrl: './practice-test.component.html',
  styleUrls: ['./practice-test.component.css']
})
export class PracticeTestComponent implements OnInit {

  show:boolean=true
  log=[]

  constructor() { }

  ngOnInit() {
  }
  toggle(event:Event){
    this.show=!this.show
    this.log.push(new Date())
  }
}
