import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GetSpahtenService } from '../../services/getspahtens.service';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [GetSpahtenService]
})
export class DashboardComponent {


    constructor(private auth:Auth, public getSpahtenService:GetSpahtenService){

        this.getSpahtenService = getSpahtenService;

    }
    title = 'racelocal2017 dashboard!';



    redirectToProfilePage(): boolean {

      return this.getSpahtenService.checkForFirstTimeEntry();
    }





}
