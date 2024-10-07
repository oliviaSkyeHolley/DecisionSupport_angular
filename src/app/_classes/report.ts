/**
 * @whatItDoes Represents an Report
 *
 * @description
 *  This is the Class that holds an instance of a report having been generated.
 *
*/

export class Report {
    constructor( entityId: number, label: string, decisionSupportId: number) {
        this.entityId = entityId;
        this.label = label;
        this.decisionSupportId = decisionSupportId;
    }

    /**
     * The id of the report.
     */
    entityId: number;

    /**
     * The name of the report.
     */
    label: string;

    /**
     * ID of the decision support process that the report is based off.
     */
    decisionSupportId: number;
}
