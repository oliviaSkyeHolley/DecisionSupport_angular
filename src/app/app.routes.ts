import {Routes} from '@angular/router';
import {AuthenticateComponent} from './_components/authenticate/authenticate.component';
import {InvestigationListComponent} from './_components/investigation-list/investigation-list.component';
import {AuthGuard} from './_services/auth.guard';
import { InvestigationComponent } from './_components/investigation/investigation.component';

export const appRoutes: Routes = [
    { path: 'login', component: AuthenticateComponent},
    //{ path: 'process', canActivate: [AuthGuard]},
    //{ path: 'process/:id', canActivate: [AuthGuard]},
    //{ path: 'process/:id/update', canActivate: [AuthGuard]},
    { path: 'support', component: InvestigationListComponent, canActivate: [AuthGuard]},
    { path: 'support/:id', component: InvestigationComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login' }
];