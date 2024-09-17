/**
 * @whatItDoes Provides services for the Process Class 
 *
 * @description
 *  GET (list), POST, DUPLICATE, PATCH and ARCHIVE are available.
 */

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ProcessList} from '../_classes/process-list';
import {Process} from '../_classes/process';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProcessService {


  constructor(private http: HttpClient, private authService: AuthService) {}

  getProcessList(): Observable<ProcessList[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<ProcessList[]>(environment.getProcessListURL, { headers });
  }

  postProcess(data: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.post<Process>(environment.postProcessURL, data, { headers });
  }

  duplicateProcess(data: any): Observable<any> {
    const headers = this.authService.getHeaders();
    return this.http.post<Process>(environment.duplicateProcessURL, data, { headers });
  }

  patchProcess(processId:string, data:any): Observable<any>{
    const headers = this.authService.getHeaders();
    return this.http.patch<Process>(`${environment.patchProcessURL}${processId}`, data, {headers});
  }
  
  archiveProcess(processId:string): Observable<any>{
    const headers = this.authService.getHeaders();
    return this.http.delete<Process>(`${environment.archiveProcessURL}${processId}`,{headers}); // should this still be have 'delete' or are do we just need to patch: visible = 'no'?
  }

  //NOTE: there used to be get, add, update, update order, delete functions here for individual steps. We're trying to just go through patchProcess now for those functions.
}
