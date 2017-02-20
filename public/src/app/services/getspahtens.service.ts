
import { Injectable }      from '@angular/core';
import { Router } from '@angular/router';
import { Spahten } from '../model/spahtens.model';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


//if its injectable, you need to inject it into a components who wants to call the service constructor
@Injectable()
export class GetSpahtenService {

    API_URL = 'http://localhost:3000';
    spahtenProfile:Spahten;


    constructor(private router: Router, public authHttp: AuthHttp) {
    };

    //getSpahtens(): Spahten {

    //mock service call to pull in mock data
    //  return Spahten;
    // }

    storeSpahten(any: any): void {
        //store spahten data locally, mock service for development purposes
        localStorage.setItem('spahten', JSON.stringify(any));
    }
    
    public createSpahten(spahtenProfile:Spahten): Observable<any> {
        console.log("Creating a Spahten Profile!!");

        return this.authHttp.post(`${this.API_URL}/api/core/spahten`, spahtenProfile)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error || 'Server error')

            );
        //console.log(res.statusCode);

    }
    
    

    getSpahtenProfile(): any {
        //reads a spahten profile from the DB
        //don't store this shit in a cookie, check for a cookie first, check to make sure the data matches, or go to the DB

        return (JSON.parse(localStorage.getItem('spahten')))
    }

    checkForSpahten(email: string, name: string): boolean {
        //do a DB look up to see if there is a spahten profile stored already for this runner
        //simulating a look up to the DB with a return
        //if the user logs in with facebook, we have a name field
        //if the user logs in with just an email, we have the email field
        //we should check the db for existance of either, which would mean one already exists
        //if it doesn't exist, then we will show an input field for the user to fill out information
        //if it does exist, we'll simply grab the data and return it from the DB and fill the field information in
        //without requiring the user to enter in text, just display it.


        if(email==="vrsixed@gmail.com" || name ==="Ben Norman"){
            return true;
        }else {
            return false;
        }
    }

    updateSpahten(any:any){
        //update an existing record for a spahten
    }

    public findSpahten(spahtenProfile:Spahten): Observable<any> {
        console.log("Finding a Spahten hopefully");
        
        return this.authHttp.post(`${this.API_URL}/api/core/findspahten`, spahtenProfile)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error || 'Server error')
           
            );
        //console.log(res.statusCode);

    }

    
    //if we're missing information return true and force the user to update
    public checkForFirstTimeEntry(): boolean {


        if(localStorage.getItem("spahten")){

            this.spahtenProfile = JSON.parse(localStorage.getItem("spahten"));

        } else {
            return true;
        }

        if(this.spahtenProfile.name.length <=0 ||
            this.spahtenProfile.email.length <=0 ||
            this.spahtenProfile.streetAddress.length <=0 ||
            this.spahtenProfile.zip.length <=0 ||
            this.spahtenProfile.name.includes('@')){

          // console.log("We're missing information....")
            return true;
        } else {
          //  console.log("We got the information...")
            return false;
        }


    }


}