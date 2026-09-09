import * as z from "zod";
import { entryUnionSchema } from "./validators/entry";

export type ValidationIssue = z.core.$ZodIssue;

export function validateSchema({
  object,
  schema,
}: {
  object: unknown;
  schema: z.ZodType;
}): ValidationIssue[] {
  const result = schema.safeParse(object);
  return result.success ? [] : result.error.issues;
}

export function validateEntry(object: unknown): ValidationIssue[] {
  return validateSchema({ object, schema: entryUnionSchema });
}
