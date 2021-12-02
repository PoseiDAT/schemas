import { BaseEntry } from "./base-entry";
import { schemas } from "./schemas";
import { IEntryAisMessage } from "./schema-types";

export class AisMessageEntry extends BaseEntry {
  constructor(public data: IEntryAisMessage) {
    super(data, schemas.entry.aisMessage, "ais-message");
  }
}
