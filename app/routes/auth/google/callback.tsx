import type { LoaderFunction } from "remix";

import { authenticator } from "~/services/auth.server";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};
