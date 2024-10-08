/*
* @whatItDoes Holds a series of steps to form a Process!
 *
 * @description
 *  Processes are built by the program and the steps they contain followed by decision supports!
 *
*/

import {Step} from "./step";

export class Process {
  constructor(entityId: number, uuid: number, label: string, steps: Step[]) {
    this.entityId = entityId;
    this.uuid = uuid
    this.label = label;
    this.steps = steps;
  }

  /**
   * The id of the process.
   */
  entityId: number;

  /**
   * The unique id of the process.
   */
  uuid: number;

  /**
   * The name of the process.
   */
  label: string;

 
  /**
   * The array of steps that makes up a process!
   */
  steps: Step[];
}