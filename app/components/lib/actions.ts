"use server";

import { z } from "zod";

const formSchema = z.object({
  id: z.string(),
  toolName: z.string({
    invalid_type_error: "Please enter a name for your tool",
  }),
  description: z.string({ invalid_type_error: "Describe your tool!" }),
});

const CreateTool = formSchema.omit({ id: true });
export type State = {
  errors?: { toolName?: string[]; description?: string[] };
  message?: string;
};

export async function createTool(prevState: State, formData: FormData) {
  const validatedFields = CreateTool.safeParse({
    toolName: formData.get("toolName"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Tools.",
    };
  }

  const { toolName, description } = validatedFields.data;

  console.log({ "tool Name:": toolName, description: description });
  return {
    errors: undefined, // Clear errors on success
    message: `Tool "${toolName}" created successfully!`,
  };
}
