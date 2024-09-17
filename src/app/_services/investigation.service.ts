/**
 * @whatItDoes Provides services for the Investigation Class 
 *
 * @description
 *  Allows components to access and work with Investigations.
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

  //file handling input info
  investigationId!: string;
  label!: string;
  stepId!: string;

  setDocumentDetails(investigationId: string, label: string, stepId: string){
    this.investigationId = investigationId;
    this.label = label;
    this.stepId = stepId;
  }

  getInvestigationId(): string{
    return this.investigationId;
  }
  getLabel(): string{
    return this.label;
  }
  getStepId(): string{
    return this.stepId;
  }


  //Investigation: GET, POST, PATCH, ARCHIVE
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
    const headers =this.authService.getHeaders();
    return this.http.patch<Investigation>(`${environment.patchInvestigationURL}${investigationId}`, newSteps, { headers });
  }

  archiveInvestigation(investigationId:string): Observable<any>{
    const headers =this.authService.getHeaders();
    return this.http.delete<Investigation>(`${environment.archiveInvestigationURL}${investigationId}`, { headers });
  }
}