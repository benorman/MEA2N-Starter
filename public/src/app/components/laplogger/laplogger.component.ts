import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GetSpahtenService } from '../../services/getspahtens.service';


@Component({
    selector: 'laplogger',
    templateUrl: './laplogger.component.html',
    styleUrls: ['./laplogger.component.css'],
    providers: [GetSpahtenService]
})

export class LaploggerComponent {


    constructor(private auth:Auth, public getSpahtenService:GetSpahtenService){

        this.getSpahtenService = getSpahtenService;

    }
    title = 'laplogger';



}
