import { measurementValueSchema } from "../../src/validators";

test("POSITION + numeric payload is valid (current oneOf)", () => {
  expect(
    measurementValueSchema.safeParse({
      type: "POSITION",
      numeric: { value: 1 },
    }).success,
  ).toBe(true);
});

test("POSITION with no payload is invalid", () => {
  expect(measurementValueSchema.safeParse({ type: "POSITION" }).success).toBe(
    false,
  );
});
