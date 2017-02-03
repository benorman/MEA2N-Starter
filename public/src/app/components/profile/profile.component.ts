import { Component } from '@angular/core';
import { Auth } from '../../services/auth.service';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    profile: any;

    constructor(private auth:Auth){
        this.profile = JSON.parse(localStorage.getItem('profile'));

    }
    title = 'Hi there! ';
}
