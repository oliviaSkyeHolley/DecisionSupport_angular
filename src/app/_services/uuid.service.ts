/**
 * @whatItDoes Generates unique identifiers (UUIDs) for steps, choices, processes, etc.
 *
 * @description
 *  Uses the uuid library to generate the completely unique IDs.
 */

import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  generateUuid(): string {
    return uuidv4(); 
  }
}