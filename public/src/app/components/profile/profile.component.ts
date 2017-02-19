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

    spahtenProfileEmail = false;

    spahtenProfileName = false;

    spahtenProfileStreetAddress = false;

    spahtenProfileZip = false;

    spahtenProfileNameisEmail = false;





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


    //this method pulls back the profile object from Auth0 and sets some fields.
    //for facebook, the name field is a the name set in their profile
    //for those who registerd with an email, the name is an email.

    doInitialFieldSetting() {


        //check the profile name fetched from auth0, if it is an email address, set it to empty forcing the user to input a name
        //if it is a name from facebook, then set it as the name from facebook
        this.spahtenProfile.name = this.spahtenProfile.name?this.spahtenProfile.name:this.profile.name.includes('@')?"":this.profile.name;
        this.spahtenProfile.email = this.profile.email ? this.profile.email : this.spahtenProfile.email;
        this.spahtenProfile.image = this.profile.image ? this.profile.image : this.spahtenProfile.image;

        console.log(" The profile is >>>>>>>>>>>>>>>>>>>> " + JSON.stringify(this.spahtenProfile));

        this.findSpahten(this.spahtenProfile);
        this.setFirstTimeProfileFlags();

        this.spahtenForm = this.spahtenFormBuilder.group({

            'name': [this.spahtenProfile.name ? this.spahtenProfile.name : ""],
            'email': [this.spahtenProfile.email ? this.spahtenProfile.email : ""],
            'streetAddress': [this.spahtenProfile.streetAddress ? this.spahtenProfile.streetAddress : ""],
            'zip': [this.spahtenProfile.zip ? this.spahtenProfile.zip : ""]


        });


    }

    private findSpahten(spahten:Spahten){

        this.getSpahtenService.findSpahten(spahten).subscribe(
            response => {
                console.log(response.profile);
                this.spahtenProfile.name= response.profile.name.length!=0? response.profile.name : this.spahtenProfile.name ;
                this.spahtenProfile.email= response.profile.email.length!=0? response.profile.email : this.spahtenProfile.email ;
                this.spahtenProfile.streetAddress = response.profile.streetAddress.length!=0? response.profile.streetAddress : this.spahtenProfile.streetAddress ;
                this.spahtenProfile.zip = response.profile.zip.length!=0? response.profile.zip : this.spahtenProfile.zip ;
                this.setFirstTimeProfileFlags();

            },
            err => {
                console.log(err);
            }
        )
    }


    
    setFirstTimeProfileFlags(){
        if(this.checkForFirstTimeEntry()){
            console.log("SETTING FIRST TIME FLAGS")
            //check each critical item, if we need it set it to true
            //at this point either we pulled the information from local storage or the DB if it exists
            if(this.spahtenProfile.email.length<=0){

                this.spahtenProfileEmail = true;
            }

            if(this.spahtenProfile.name.includes('@')){

                this.spahtenProfileNameisEmail = true;
            }

            if(this.spahtenProfile.name.length<=0 || this.spahtenProfile.name.includes('@')){
                this.spahtenProfileName = true;

            }
            if(this.spahtenProfile.streetAddress.length<=0){
                this.spahtenProfileStreetAddress = true;
            }
            if(this.spahtenProfile.zip.length<=0){
                this.spahtenProfileZip = true;
            }
            
        }
        
    }
    
    
    checkForFirstTimeEntry(): boolean {

       return(this.getSpahtenService.checkForFirstTimeEntry());
        
        
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
