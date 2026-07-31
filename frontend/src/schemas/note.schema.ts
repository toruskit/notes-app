import z from "zod";

export const noteSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(64, "Maximum characters reached"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(128, "Maximum characters reached"),
  category: z
    .array(z.string())
    .min(1, "At least one category must be selected"),
});