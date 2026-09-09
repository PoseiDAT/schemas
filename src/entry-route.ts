import { BaseEntry } from "./base-entry";
import { IEntryRoute } from "./schema-types";
import { routeSchema } from "./validators/entry/route";

export class RouteEntry extends BaseEntry {
  constructor(public data: IEntryRoute) {
    super(data, routeSchema, "route");
  }
}
