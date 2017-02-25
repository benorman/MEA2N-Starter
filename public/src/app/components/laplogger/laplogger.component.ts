import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { GetSpahtenService } from '../../services/getspahtens.service';

import {FormsModule, ReactiveFormsModule, FormBuilder, FormGroup} from '@angular/forms';


@Component({
    selector: 'laplogger',
    templateUrl: './laplogger.component.html',
    styleUrls: ['./laplogger.component.css'],
    providers: [GetSpahtenService]
})

export class LapLoggerComponent {

    @Input('lapCount') lapCount:number;
    @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
    
    loggerForm:FormGroup;
    loggerFormBuilder:FormBuilder;

    constructor(private auth:Auth, public getSpahtenService:GetSpahtenService, fb:FormBuilder){

        this.getSpahtenService = getSpahtenService;
        this.loggerFormBuilder = fb;

        this.formSetup();
        

    }
    title = 'laplogger';
    
    formSetup(){

        this.loggerForm = this.loggerFormBuilder.group({

            'count': [this.lapCount]


        });
        
        
    }


    increment(){

        console.log("LapCount is " + this.lapCount)
    this.lapCount++;
        this.countChange.emit(this.lapCount);

}

    decrement(){

        this.lapCount--;
        console.log("LapCount is " + this.lapCount)
        if(this.lapCount<0){
            this.lapCount = 0;
        }
        this.countChange.emit(this.lapCount);

    }

}
