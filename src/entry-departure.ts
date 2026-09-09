import { BaseEntry } from "./base-entry";
import { IEntryDeparture } from "./schema-types";
import { departureSchema } from "./validators/entry/departure";

export class DepartureEntry extends BaseEntry {
  constructor(public data: IEntryDeparture) {
    super(data, departureSchema, "departure");
  }
}
