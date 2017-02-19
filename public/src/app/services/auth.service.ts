// app/auth.service.ts

import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock('Ee0ZLEQBzzLyWHzffsAbKr2ggc9d8wa7', 'bnorman.auth0.com', {});

    constructor(private router: Router) {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {

            this.lock.getUserInfo(authResult.accessToken, function(error:any, profile:any){
                if(error){
                    throw new Error(error);
                }
                localStorage.setItem('access_token', authResult.accessToken);
                localStorage.setItem('id_token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
                console.log(profile);
                router.navigate(['/dashboard']);
            });


        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('spahten');
        console.log("Removed Tokens");
    }
}