"use client";
import { createTool, State } from "@/app/components/lib/actions";
import { useActionState } from "react";

export default function Form() {
  const initialState: State = { message: "", errors: {} };
  const [state, formAction] = useActionState(createTool, initialState);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="toolName">Name your tool</label>
        <input id="toolName" type="text" name="toolName"></input>
      </div>
      <div>
        <label htmlFor="description">Describe your tool</label>
        <input id="description" type="text" name="description"></input>
      </div>
      <button type="submit">Send it! </button>
      {state.errors && (
        <div>
          {state.errors.toolName && <p>{state.errors.toolName.join(", ")}</p>}
          {state.errors.description && (
            <p>{state.errors.description.join(", ")}</p>
          )}
        </div>
      )}
      {state.message && <p>{state.message}</p>}
    </form>
  );
}
