import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { sessionStorage } from "~/services/session.server";

let googleStrategy = new GoogleStrategy(
  {
    clientID: process.env["GOOGLE_CLIENT_ID"] || "",
    clientSecret: process.env["GOOGLE_SECRET_KEY"] || "",
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async (data) => {
    // Get the user data from your DB or API using the tokens and profile
    return data;
  }
);

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(googleStrategy);
