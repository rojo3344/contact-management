import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import {RouterModule} from '@angular/router';
import {ContactRoute} from './contact-route';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DatabaseData} from './data/database-data';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactComponent,
    DeleteContactComponent,
    EditContactComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ContactRoute),
    InMemoryWebApiModule.forRoot(DatabaseData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
