
import { Injectable }      from '@angular/core';
import { Router } from '@angular/router';
import { RACES } from '../model/mock.data'
import { Races } from '../model/races.model'

//if its injectable, you need to inject it into a components who wants to call the service constructor
@Injectable()
export class GetRaces {
     constructor(private router: Router) {
            };


    getRaces(): Races [] {
        return RACES;
    }
    
    
}