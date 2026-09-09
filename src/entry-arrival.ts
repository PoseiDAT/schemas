import { BaseEntry } from "./base-entry";
import { IEntryArrival } from "./schema-types";
import { arrivalSchema } from "./validators/entry/arrival";

export class ArrivalEntry extends BaseEntry {
  constructor(public data: IEntryArrival) {
    super(data, arrivalSchema, "arrival");
  }
}
