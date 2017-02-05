import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';
import {GetSpahtenService} from '../../services/getspahtens.service'

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [GetSpahtenService]
})
export class ProfileComponent {

    profile: any;

    constructor(private auth:Auth, public getSpahtenService:GetSpahtenService){
        this.profile = JSON.parse(localStorage.getItem('profile'));
        this.getSpahtenService = getSpahtenService;

    }
    title = 'Hi there! ';
}
