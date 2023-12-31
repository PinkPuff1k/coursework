import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './_helpers';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { Journal1Component } from './journal1/journal1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_services/in-memory-data.service';
import { Journal2Component } from './journal2/journal2.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
// import { VgCoreModule } from '@videogular/ngx-videogular/core';
// import { VgControlsModule } from '@videogular/ngx-videogular/controls';
// import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
// import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        AppRoutingModule,
        NgbModule,
        FormsModule,
        // VgCoreModule,
        // VgControlsModule,
        // VgOverlayPlayModule,
        // VgBufferingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        LoginComponent,
        Journal1Component,
        Journal2Component,
        ConfirmDialogComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent],
})

export class AppModule { }