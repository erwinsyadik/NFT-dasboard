import type { ActionFunction } from "remix";

import { authenticator } from "~/services/auth.server";

export let action: ActionFunction = ({ request }) => {
  return authenticator.logout(request, { redirectTo: "/" });
};
