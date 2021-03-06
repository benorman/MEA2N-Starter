
import { Injectable }      from '@angular/core';
import { Router } from '@angular/router';
import { Spahten } from '../model/spahtens.model'


//if its injectable, you need to inject it into a components who wants to call the service constructor
@Injectable()
export class GetSpahtenService {


    constructor(private router: Router) {
    };

    //getSpahtens(): Spahten {

    //mock service call to pull in mock data
    //  return Spahten;
    // }

    storeSpahten(any: any): void {
        //store spahten data locally, mock service for development purposes
        localStorage.setItem('spahten', JSON.stringify(any));
    }

    createSpahten(any: any): void {
        //create a spahten in the DB

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

}