/**
 * @whatItDoes Provides services for the Process Class
 *
 * @description
 *  GET (list), POST, DUPLICATE, PATCH and ARCHIVE are available for Process as a whole. GET, POST, PATCH and DELETE are avaialble for individual steps.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ReportList} from '../_classes/report-list';
import {Report} from '../_classes/report';
import {AuthService} from "./auth.service";
import {Investigation} from "../_classes/investigation";
import {InvestigationList} from "../_classes/investigation-list";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getReport(decisionSupportId: string): Observable<Report> {
    const headers = this.authService.getHeaders();
    return this.http.get<Report>(`${environment.getDecisionSupportReportURL}${decisionSupportId}?_format=json`,{ headers });
  }
}
