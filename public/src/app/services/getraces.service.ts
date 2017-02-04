
import { Injectable }      from '@angular/core';
import { Router } from '@angular/router';
import { RACES } from '../model/mock.data'


@Injectable()
export class GetRaces {
     constructor(private router: Router) {
            };
    
    

    public getRaces() {
       
        return RACES;
        
    }
    
}