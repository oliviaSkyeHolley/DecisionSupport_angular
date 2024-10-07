/**
 * @whatItDoes Provides a service for managing documents uploaded during decision supports.
 *
 * @description
 *  Each document is associated with a linked decision support, has a name, and has been attatched to a specific step. Getters and a general set are available.
 */

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  constructor() {}

  decisionSupportId!: string; //linked decision support 
  label!: string; //name of doucment
  stepId!: string; //step the document was uploaded to

  setDocumentDetails(decisionSupportId: string, label: string, stepId: string){
    this.decisionSupportId = decisionSupportId;
    this.label = label;
    this.stepId = stepId;
  }

  getDecisionSupportId(): string{
    return this.decisionSupportId;
  }
  getLabel(): string{
    return this.label;
  }
  getStepId(): string{
    return this.stepId;
  }
}