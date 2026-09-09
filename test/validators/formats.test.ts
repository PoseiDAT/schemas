import {
  POSEIDAT_DATE_TIME_PATTERN,
  poseidatDateTime,
  poseidatUuid,
} from "../../src/validators/formats";

describe("poseidatDateTime", () => {
  test("accepts uppercase Z", () => {
    expect(poseidatDateTime.safeParse("2021-01-01T01:00:00Z").success).toBe(true);
  });

  test("accepts offset with colon", () => {
    expect(poseidatDateTime.safeParse("2021-01-01T01:00:00+01:00").success).toBe(true);
  });

  test("accepts a year between 0001 and 0099", () => {
    expect(poseidatDateTime.safeParse("0001-01-01T00:00:00Z").success).toBe(true);
  });

  test("rejects lowercase z", () => {
    expect(poseidatDateTime.safeParse("2021-01-01T01:00:00z").success).toBe(false);
  });

  test("rejects lowercase t separator", () => {
    expect(poseidatDateTime.safeParse("2021-01-01t01:00:00Z").success).toBe(false);
  });

  test("rejects offset without colon", () => {
    expect(poseidatDateTime.safeParse("2021-01-01T01:00:00+0100").success).toBe(false);
  });

  test("rejects an impossible calendar date", () => {
    expect(poseidatDateTime.safeParse("2021-02-30T00:00:00Z").success).toBe(false);
  });

  test("rejects a date without a time", () => {
    expect(poseidatDateTime.safeParse("2021-01-01").success).toBe(false);
  });

  test("pattern rejects a leap second", () => {
    expect(
      new RegExp(POSEIDAT_DATE_TIME_PATTERN).test("2021-01-01T23:59:60Z"),
    ).toBe(false);
  });

  test("rejects a leap second timestamp", () => {
    expect(poseidatDateTime.safeParse("2021-01-01T23:59:60Z").success).toBe(false);
  });
});

describe("poseidatUuid", () => {
  test("accepts a RFC UUID", () => {
    expect(
      poseidatUuid.safeParse("11111111-1111-4111-8111-111111111111").success,
    ).toBe(true);
  });

  test("accepts a hex UUID that is not RFC version 4", () => {
    expect(
      poseidatUuid.safeParse("11111111-1111-1111-1111-111111111111").success,
    ).toBe(true);
  });

  test("rejects a non-uuid", () => {
    expect(poseidatUuid.safeParse("not-a-uuid").success).toBe(false);
  });
});
