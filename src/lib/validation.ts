import { z } from "zod";

const baseURLSchema = z.string().url().nonempty("baseURL must be a valid URL");

export function validateConfig(baseURL: string) {
  baseURLSchema.parse(baseURL);
}
