
import { Injectable }      from '@angular/core';
import { Router } from '@angular/router';
import { SPAHTENS } from '../model/mock.data';


//if its injectable, you need to inject it into a components who wants to call the service constructor
@Injectable()
export class GetSpahtenService {
    
    
    constructor(private router: Router) {
    };
    
    getSpahtens(): Spahtens[] {

        //mock service call to pull in mock data
        return SPAHTENS;
    }

    storeSpahten(any: any): void {
        //store spahten data locally, mock service for development purposes
        localStorage.setItem('spahten', JSON.stringify(any));
    }

    createSpahten(any: any): void {
        //create a spahten in the DB
  
    }
    
    getSpahtenProfile(): any {
        //reads a spahten profile from the DB
        return (JSON.parse(localStorage.getItem('spahten')))
    }

    checkForSpahten(name: string) {
        //do a DB look up to see if there is a spahten profile stored already for this runner
    }

    updateSpahten(any:any){
        //update an existing record for a spahten
    }
    
}