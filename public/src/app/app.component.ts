import { Component } from '@angular/core';
import { Auth } from './services/auth.service'
import {GetSpahtenService} from './services/getspahtens.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GetSpahtenService]
})
export class AppComponent {
  constructor(private auth:Auth, public getSpahtenService:GetSpahtenService){
    this.getSpahtenService = getSpahtenService;
  }
  
  

  title = 'app works duh!';
}
