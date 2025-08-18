import { createAuthClient } from "better-auth/react";

type AuthClientType = ReturnType<typeof createAuthClient>;

export const authClient: AuthClientType = createAuthClient({
  basePath: "/api/auth",
});

