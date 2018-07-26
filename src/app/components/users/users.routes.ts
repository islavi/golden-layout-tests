import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { VesselsMapComponent } from '@app/components/vessels-map/vessels-map.component';

export const appRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'create', component: CreateUserComponent },
    { path: '**', component: VesselsMapComponent }
];
