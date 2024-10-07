import {Routes} from '@angular/router';
import {AuthenticateComponent} from './_components/authenticate/authenticate.component';
import { ProcessListComponent } from './_components/process-list/process-list.component';
import {InvestigationListComponent} from './_components/investigation-list/investigation-list.component';
import {AuthGuard} from './_services/auth.guard';
import { ManageProcessComponent } from './_components/manage-process/manage-process.component';
import { InvestigationComponent } from './_components/investigation/investigation.component';
import {HomeComponent} from "./_components/home/home.component";
import {ReportListComponent} from "./_components/report-list/report-list.component";


export const appRoutes: Routes = [
    { path: 'user/login', component: AuthenticateComponent},
    { path: 'home', component: HomeComponent},
    { path: 'Report-Generator', component: ReportListComponent},
    { path: 'process', component:ProcessListComponent, canActivate: [AuthGuard]},
    { path: 'process/:id',component:ManageProcessComponent, canActivate: [AuthGuard]},
    //{ path: 'process/:id/update', canActivate: [AuthGuard]},
    { path: 'support', component: InvestigationListComponent, canActivate: [AuthGuard]},
    { path: 'support/:id', component: InvestigationComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'user/login' }
];
