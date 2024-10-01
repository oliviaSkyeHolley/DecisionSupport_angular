/**
 * @whatItDoes Represents an Investigaiton
 *
 * @description
 *  This is the Class that holds an instance of a process being carried out.
 *
*/

export class Investigation {
    constructor( entityId: number, label: string, processId: number) {
        this.entityId = entityId;
        this.label = label;
        this.processId = processId;
    }
    
    /**
     * The id of the investigation.
     */
    entityId: number;
    
    /**
     * The name of the investigation.
     */
    label: string;
    
    /**
     * ID of the process that the investigation was created to carry out.
     */
    processId: number;
}