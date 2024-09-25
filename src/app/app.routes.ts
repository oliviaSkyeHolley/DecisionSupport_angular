import {Routes} from '@angular/router';
import {AuthenticateComponent} from './_components/authenticate/authenticate.component';
import {InvestigationListComponent} from './_components/investigation-list/investigation-list.component';
import {AuthGuard} from './_services/auth.guard';
import {HomeComponent} from "./_components/home/home.component";

export const appRoutes: Routes = [
    { path: 'login', component: AuthenticateComponent},
    { path: 'home', component: HomeComponent},
    //{ path: 'process', canActivate: [AuthGuard]},
    //{ path: 'process/:id', canActivate: [AuthGuard]},
    //{ path: 'process/:id/update', canActivate: [AuthGuard]},
    { path: 'support', component: InvestigationListComponent, canActivate: [AuthGuard]},
    //{ path: 'support/:id', component: InvestigationListComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login' }
];
