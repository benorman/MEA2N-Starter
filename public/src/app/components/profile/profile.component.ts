import {Component} from '@angular/core';
import {Auth} from '../../services/auth.service';
import {GetSpahtenService} from '../../services/getspahtens.service'
import {Spahten} from '../../model/spahtens.model';
import {OnInit} from '@angular/core';
import {ProfileInterface} from './profile.interface';
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';


@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [GetSpahtenService]
})

/*
 Spahten Template Data:

 name: string;
 email: string;
 streetAddress: string;
 city: string;
 state: string;
 zip: number;
 racesCompleted: [{
 id: number,
 laps: number,
 competitiveLap: boolean,
 racePoints: number
 }];
 racesRun: number;
 totalPoints: number;
 image: string;

 */
export class ProfileComponent implements OnInit {

    public profileInterface:ProfileInterface;

    profile:any;
    spahtenProfile:Spahten;
    spahtenForm: FormGroup;
    spahtenFormBuilder: FormBuilder;





    constructor(private auth:Auth, public getSpahtenService:GetSpahtenService, fb: FormBuilder) {



        this.getSpahtenService = getSpahtenService;
        this.spahtenProfile = new Spahten;
      //  try {this.spahtenProfile.name = ""}catch(any){console.log(any)};
        try {console.log(this.spahtenProfile)}catch(any){console.log(any)};

        this.spahtenFormBuilder = fb;



    }

    title = 'Hi there! ';


    ngOnInit():void {


        this.profile = JSON.parse(localStorage.getItem('profile'));

        this.doInitialFieldSetting();



    }

    save(model:ProfileInterface, isValid:boolean) {

        console.log(model, isValid);

    }

    doInitialFieldSetting(){

        this.spahtenProfile.name = this.profile.name;
        this.spahtenProfile.email = this.profile.email ? this.profile.email : this.spahtenProfile.email;
        this.spahtenProfile.image = this.profile.image ? this.profile.image : this.spahtenProfile.image;
        this.spahtenProfile.streetAddress = "";

        this.spahtenForm = this.spahtenFormBuilder.group({

            'name':[this.spahtenProfile.name?this.spahtenProfile.name:""],
            'email':[this.spahtenProfile.email?this.spahtenProfile.email:""],
            'streetAddress':[this.spahtenProfile.streetAddress?this.spahtenProfile.streetAddress:""]


        });
        

    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }


}
