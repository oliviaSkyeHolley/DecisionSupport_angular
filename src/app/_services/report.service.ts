import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

// import {Report} from '../_classes/report';
import {AuthService} from "./auth.service";


@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  decisionSupportId!: string; //linked decision support
  label!: string; //name of doucment
  stepId!: string; //step the document was uploaded to


  getReport(decisionSupportId: string): Observable<Report> {
    const headers = this.authService.getHeaders();
    return this.http.get<any>(`${environment.getDecisionSupportReportURL}${decisionSupportId}?_format=json`,{ headers });
  }


  getDocumentList(decisionSupportId:string){
    const headers =this.authService.getHeaders();
    return this.http.get<any[]>(`${environment.getDecisionSupportDocumentsURL}${decisionSupportId}`, {headers});
  }

  getDecisionSupportId(): string{
    return this.decisionSupportId;
  }

  getStepId(): string{
    return this.stepId;
  }
}
