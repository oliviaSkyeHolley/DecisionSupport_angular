/**
 * @whatItDoes Represents a single Process retrieved from backend to be listed in an array.
 * 
 * @description
 *  Stores the data of a single Process retrieved from the list of Processes.
 *
*/

export class ProcessList {
  constructor(
    label: string,
    entityId: number,
    revisionCreationTime: string,
    revisionStatus: string,
    createdTime: string,
    updatedTime: string,
    enabled: boolean
  ) {
    this.label = label;
    this.entityId = entityId;
    this.revisionCreationTime = revisionCreationTime;
    this.revisionStatus = revisionStatus;
    this.createdTime = createdTime;
    this.updatedTime = updatedTime;
    this.enabled = enabled;
  }
  /**
   * The title of the Process
   */
  label: string;

  /**
   * The ID assigned by Drupal for the Process
   */
  entityId: number;

  /**
   * 
   */
  revisionCreationTime: string;

  /**
   * Determines the status of the Process (i.e, draft, archived, published)
   */
  revisionStatus: string;

  /**
   * Time when the Process was created.
   */
  createdTime: string;

  /**
  * Time when the Process was updated.
  */
  updatedTime: string;

  /**
   * Is process enabled or disabled
   */
  enabled: boolean;
}    