/**
 * @whatItDoes Represents a single Investigation retrieved from the backend to be listed in an array.
 * 
 * @description
 *  Stores the data of a single Investigation retrieved from the list of Investigations.
 *
*/

export class InvestigationList {
    constructor(
      label: string,
      entityId: number,
      revisionCreationTime: string,
      investigationId: number,
      createdTime:string
    ) {
      this.label = label;
      this.entityId = entityId;
      this.revisionCreationTime = revisionCreationTime;
      this.investigationId = investigationId;
      this.createdTime = createdTime;
    }
    /**
     * The title of a report
     */
    label: string;
  
    /**
     * Reprents the id given by drupal for the report
     */
    entityId: number;
  
    /**
     * 
     */
    revisionCreationTime: string;
  
    /**
     * Determines the linked investigation.
     */
    investigationId: number;
  
    /**
     * Time when the investigation was created
     */
    createdTime:string;
  }
  