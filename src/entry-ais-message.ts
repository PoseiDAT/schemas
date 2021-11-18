import { BaseEntry } from "./base-entry";
import { schemas } from "./schemas";
import { IEntryBaseAisMessage } from "./schema-types";

export class AisMessageEntry extends BaseEntry {
  constructor(public data: IEntryBaseAisMessage) {
    super(data, schemas.entry.aisMessage, "ais-message");
  }
}
