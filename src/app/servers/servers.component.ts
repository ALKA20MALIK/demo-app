import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean=false
  serverCreationStatus:string='no server created'
  serverName:string='Test Server'
  userName:string=''
  serverCreated:boolean=false
  servers=['Test server','Test Server2']

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  onCreateServer(){
    this.serverCreated=true
    this.serverCreationStatus='Server is created '+ this.serverName
    this.servers.push(this.serverName)
  }
  onUpdateServer(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
