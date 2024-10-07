/**
 * @whatItDoes Provides services for the Decision Support Class 
 *
 * @description
 *  GET (singular and list), POST, PATCH and ARCHIVE are available.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {DecisionSupportList} from "../_classes/decision-support-list";
import {DecisionSupport} from '../_classes/decision-support';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class DecisionSupportService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getDecisionSupport(decisionSupportId: string, headers: HttpHeaders): Observable<DecisionSupport> {
    return this.http.get<DecisionSupport>(`${environment.getDecisionSupportURL}${decisionSupportId}?_format=json`, { headers });
  }

  getDecisionSupportList(): Observable<DecisionSupportList[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<DecisionSupportList[]>(environment.getDecisionSupportListURL, { headers });
  }

  postDecisionSupport(data: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.post<DecisionSupport>(environment.postDecisionSupportURL, data, { headers });
  }

  patchDecisionSupport(decisionSupportId: string, newSteps: any): Observable<DecisionSupport> {
    console.log(decisionSupportId);
    console.log(`${environment.patchDecisionSupportURL}${decisionSupportId}`);
    console.log("Content of the patch: ", newSteps);
    const headers = this.authService.getHeaders();
    return this.http.patch<DecisionSupport>(`${environment.patchDecisionSupportURL}${decisionSupportId}`, newSteps, { headers });
  }

  archiveDecisionSupport(decisionSupportId:string): Observable<any>{
    const headers = this.authService.getHeaders();
    console.log(`${environment.archiveDecisionSupportURL}${decisionSupportId}`);
    return this.http.delete<DecisionSupport>(`${environment.archiveDecisionSupportURL}${decisionSupportId}`, { headers });
  }
}