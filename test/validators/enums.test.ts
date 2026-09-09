import "../../src/validators";
import { poseidatRegistry } from "../../src/validators/registry";

const enumIds = [
  "https://poseidat.org/schema/enum/device-type.json",
  "https://poseidat.org/schema/enum/effort-zone.json",
  "https://poseidat.org/schema/enum/equipment-type.json",
  "https://poseidat.org/schema/enum/fish-freshness.json",
  "https://poseidat.org/schema/enum/fish-package-type.json",
  "https://poseidat.org/schema/enum/fish-presentation.json",
  "https://poseidat.org/schema/enum/fish-state.json",
  "https://poseidat.org/schema/enum/fishing-gear-type.json",
  "https://poseidat.org/schema/enum/gnss-fix-quality.json",
  "https://poseidat.org/schema/enum/gnss-fix-type.json",
  "https://poseidat.org/schema/enum/measurement-type.json",
  "https://poseidat.org/schema/enum/reason-arrival.json",
  "https://poseidat.org/schema/enum/reason-departure.json",
  "https://poseidat.org/schema/enum/reason-discard.json",
  "https://poseidat.org/schema/enum/route-geometry-type.json",
  "https://poseidat.org/schema/enum/scale-category.json",
  "https://poseidat.org/schema/enum/vessel-compartment.json",
];

test("every enum schema is registered", () => {
  const ids = [...poseidatRegistry._idmap.keys()];

  for (const id of enumIds) {
    expect(ids).toContain(id);
  }
});
