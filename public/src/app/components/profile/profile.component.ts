import {Component} from '@angular/core';
import {Auth} from '../../services/auth.service';
import {GetSpahtenService} from '../../services/getspahtens.service'
import {Spahten} from '../../model/spahtens.model';
import {OnInit} from '@angular/core';
import {ProfileInterface} from './profile.interface';
import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';


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
    spahtenForm:FormGroup;
    spahtenFormBuilder:FormBuilder;


    constructor(private auth:Auth, public getSpahtenService:GetSpahtenService, fb:FormBuilder) {


        this.getSpahtenService = getSpahtenService;

        if(localStorage.getItem("spahten")){

            this.spahtenProfile = JSON.parse(localStorage.getItem("spahten"));

        }else {

            this.spahtenProfile = new Spahten;

        }


        //  try {this.spahtenProfile.name = ""}catch(any){console.log(any)};
        try {
            console.log(this.spahtenProfile)
        } catch (any) {
            console.log(any)
        }
        ;

        this.spahtenFormBuilder = fb;


    }

    title = 'Hi there! ';


    ngOnInit():void {


        this.profile = JSON.parse(localStorage.getItem('profile'));

        this.doInitialFieldSetting();

    }

    updateProfileEmail(event:any) {


        this.spahtenProfile.email = event.target.value;

    }

    updateProfileName(event:any) {


        this.spahtenProfile.name = event.target.value;

    }

    updateProfileStreetAddress(event:any) {


        this.spahtenProfile.streetAddress = event.target.value;

    }

    updateProfileZip(event:any) {


        this.spahtenProfile.zip = event.target.value;

    }


    save(model:ProfileInterface, isValid:boolean) {

        console.log(model, isValid);

    }

    doInitialFieldSetting() {

        this.spahtenProfile.name = this.profile.name;
        this.spahtenProfile.email = this.profile.email ? this.profile.email : this.spahtenProfile.email;
        this.spahtenProfile.image = this.profile.image ? this.profile.image : this.spahtenProfile.image;
        this.spahtenProfile.streetAddress = "";

        this.spahtenForm = this.spahtenFormBuilder.group({

            'name': [this.spahtenProfile.name ? this.spahtenProfile.name : ""],
            'email': [this.spahtenProfile.email ? this.spahtenProfile.email : ""],
            'streetAddress': [this.spahtenProfile.streetAddress ? this.spahtenProfile.streetAddress : ""],
            'zip': [this.spahtenProfile.zip ? this.spahtenProfile.zip : ""]


        });


    }

    onSubmit(value: Object):void {

        console.log('you submitted value: ', value);

        console.log(value.hasOwnProperty("name"));
        console.log("Here is the name " + value["name"]);
        console.log("Here is the email " + value["email"]);
        console.log("Here is the zip " + value["zip"]);
        console.log("Here is the streetAddress " + value["streetAddress"]);



        if (value.hasOwnProperty("name") && this.spahtenProfile.name.length > 0) {
            console.log("Setting the Name value as " + value["name"]);
            this.spahtenProfile.name = value["name"];

        } else if (value.hasOwnProperty("email") && this.spahtenProfile.email.length > 0) {
            console.log("Setting the Email value as " + value["email"]);
            this.spahtenProfile.email = value["email"];

        } else if (value.hasOwnProperty("streetAddress") && this.spahtenProfile.streetAddress.length > 0) {
            console.log("Setting the streetAddress value as " + value["streetAddress"]);
            this.spahtenProfile.streetAddress = value["streetAddress"];

        } else if (value.hasOwnProperty("zip") && this.spahtenProfile.zip.length > 0) {
            console.log("Setting the zip value as " + value["zip"]);
            this.spahtenProfile.zip = value["zip"];
        }
        var spahten= JSON.stringify(this.spahtenProfile);
       // localStorage.setItem("spahten") = JSON.stringify(this.spahtenProfile);
        localStorage.setItem("spahten", spahten);

    }



}
