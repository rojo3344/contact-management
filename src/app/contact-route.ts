import {ContactListComponent} from './contact-list/contact-list.component';
import {Routes} from '@angular/router';
import {AddContactComponent} from './add-contact/add-contact.component';
import {DeleteContactComponent} from './delete-contact/delete-contact.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ErrorPageComponent} from './error-page/error-page.component';

export const ContactRoute: Routes = [
  {path: 'list', component: ContactListComponent},
  {path: 'add', component: AddContactComponent},
  {path: 'delete', component: DeleteContactComponent},
  {path: 'edit/:id', component: EditContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'list'},
  {path: '**', pathMatch: 'full', component: ErrorPageComponent},
]
