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
      processId: number,
      createdTime:string
    ) {
      this.label = label;
      this.entityId = entityId;
      this.revisionCreationTime = revisionCreationTime;
      this.processId = processId;
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
     * Determines the linked process (i.e. the type of process that the investigation is following).
     */
    processId: number;
  
    /**
     * Time when the investigation was created
     */
    createdTime:string;
  }
  