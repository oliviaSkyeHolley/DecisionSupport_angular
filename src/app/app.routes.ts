import {Routes} from '@angular/router';
import {AuthenticateComponent} from './_components/authenticate/authenticate.component';
import { ProcessListComponent } from './_components/process-list/process-list.component';
import {InvestigationListComponent} from './_components/investigation-list/investigation-list.component';
import {AuthGuard} from './_services/auth.guard';

export const appRoutes: Routes = [
    { path: 'login', component: AuthenticateComponent},
    { path: 'process', component:ProcessListComponent, canActivate: [AuthGuard]},
    //{ path: 'process/:id', canActivate: [AuthGuard]},
    //{ path: 'process/:id/update', canActivate: [AuthGuard]},
    { path: 'support', component: InvestigationListComponent, canActivate: [AuthGuard]},
    //{ path: 'support/:id', component: InvestigationListComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login' }
];