import { Routes } from '@angular/router';
import { TestPanelComponent } from '@components/test-panel.component';
import { UsersComponent } from './users.component';
import { CreateUserComponent } from './create-user/create-user.component';

export const appRoutes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'create', component: CreateUserComponent },
    { path: '**', component: TestPanelComponent }
];
