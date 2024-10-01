/**
 * @whatItDoes Provides services for the Investigation Class 
 *
 * @description
 *  GET (singular and list), POST, PATCH and ARCHIVE are available.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {InvestigationList} from "../_classes/investigation-list";
import {Investigation} from '../_classes/investigation';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getInvestigation(investigationId: string, headers: HttpHeaders): Observable<Investigation> {
    return this.http.get<Investigation>(`${environment.getInvestigationURL}${investigationId}?_format=json`, { headers });
  }

  getInvestigationList(): Observable<InvestigationList[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<InvestigationList[]>(environment.getInvestigationListURL, { headers });
  }

  postInvestigation(data: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.post<Investigation>(environment.postInvestigationURL, data, { headers });
  }

  patchInvestigation(investigationId: string, newSteps: any): Observable<Investigation> {
    console.log(investigationId);
    console.log(`${environment.patchInvestigationURL}${investigationId}`);
    console.log("Content of the patch: ", newSteps);
    const headers = this.authService.getHeaders();
    return this.http.patch<Investigation>(`${environment.patchInvestigationURL}${investigationId}`, newSteps, { headers });
  }

  archiveInvestigation(investigationId:string): Observable<any>{
    const headers = this.authService.getHeaders();
    console.log(`${environment.archiveInvestigationURL}${investigationId}`);
    return this.http.delete<Investigation>(`${environment.archiveInvestigationURL}${investigationId}`, { headers });
  }
}