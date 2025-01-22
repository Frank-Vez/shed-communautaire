"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";

const formSchema = z.object({
  id: z.string(),
  toolName: z
    .string({
      invalid_type_error: "Please enter a name for your tool",
      required_error: "You need to name your tool!",
    })
    .min(3, { message: "Name must be at least 3 caracters long" }),
  description: z.string({ invalid_type_error: "Describe your tool!" }),
});

const CreateTool = formSchema.omit({ id: true });
export type State = {
  errors?: { toolName?: string[]; description?: string[] };
  message?: string;
};

export async function createTool(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = CreateTool.safeParse({
    toolName: formData.get("toolName"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Tools.",
    };
  }

  const { toolName, description } = validatedFields.data;

  console.log({ "tool Name:": toolName, "description:": description });

  try {
    await sql`
    INSERT INTO tools (tool_name, description)
    VALUE (${toolName}, ${description})`;
    return {
      errors: {}, // Clear errors on success
      message: `Tool "${toolName}" created successfully!`,
    };
    // eslint-disable-next-line
  } catch (error) {
    return {
      ...prevState,
      errors: {},
      message: "server problem, boss",
    };
  }
}
