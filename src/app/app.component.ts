import { Component} from '@angular/core';
import { AuthenticationService } from './_services';

import { User, Role } from './_models';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title(title: any) {
        throw new Error('Method not implemented.');
    }
    user!: User;

    constructor(private authenticationService: AuthenticationService) {
        this.authenticationService.user.subscribe(x => this.user = x);
    }


    get isAdmin() {
        return this.user && this.user.role === Role.Admin;
    }


    logout() {
        this.authenticationService.logout();
    }
}