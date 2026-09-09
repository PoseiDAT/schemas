import { BaseEntry } from "./base-entry";
import { IEntryFishingActivity } from "./schema-types";
import { fishingActivitySchema } from "./validators/entry/fishing-activity";

export class FishingActivityEntry extends BaseEntry {
  constructor(public data: IEntryFishingActivity) {
    super(data, fishingActivitySchema, "fishing-activity");
  }
}
