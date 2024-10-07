
import {Step} from "./step";

export class Report {
  constructor(entityId: number, uuid: number, label: string, steps: Step[]) {
    this.entityId = entityId;
    this.uuid = uuid
    this.label = label;
    this.steps = steps;
  }

  /**
   * The id of the report.
   */
  entityId: number;

  /**
   * The unique id of the report.
   */
  uuid: number;

  /**
   * The name of the report.
   */
  label: string;


  /**
   * The array of steps that makes up a report!
   */
  steps: Step[];
}
