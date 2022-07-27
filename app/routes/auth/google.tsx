import type { ActionFunction, LoaderFunction } from "remix";

import { redirect } from "remix";
import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = () => redirect("/login");

export let action: ActionFunction = async ({ request }) => {
  const login = await authenticator.authenticate("google", request);
  return login;
};
