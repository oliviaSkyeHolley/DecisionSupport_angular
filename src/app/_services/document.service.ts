/**
 * @whatItDoes Provides a service for managing documents uploaded during investigations.
 *
 * @description
 *  Each document is associated with a linked investigation, has a name, and has been attatched to a specific step. Getters and a general set are available.
 */

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  investigationId!: string; //linked investigation 
  label!: string; //name of doucment
  stepId!: string; //step the document was uploaded to

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
}