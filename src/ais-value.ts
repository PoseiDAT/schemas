import { BaseEntry } from "./base-entry";
import { IEntryAISEntity } from "./schema-types";
import { schemas } from "./schemas";

export class AISEntityEntry extends BaseEntry {
  constructor(public data: IEntryAISEntity) {
    super(data, schemas.entry.aisValue, "ais-value");
  }
}
