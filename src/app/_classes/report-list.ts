/**
* @whatItDoes Represents a single report being retrieved from backend to be listed in an array.
*
* @description
*  Stores the data of a single report retrieved from the list of reports.
*
*/

export class ReportList {
  constructor(
    label: string,
    entityId: number,
    updatedTime: string,
  ) {
    this.label = label;
    this.entityId = entityId;
    this.updatedTime = updatedTime;
  }

  /**
   * The title of the Report
   */
  label: string;

  /**
   * The ID assigned by Drupal for the Report
   */
  entityId: number;


  /**
   * Time when the Report was updated.
   */
  updatedTime: string;

}
