import base from "./base";

export const syncEmails = (payload) =>
  base.get("/emails/sync-emails", payload);

export const getEmails = () => base.get("/emails/list-emails");

export const getClients = () => base.get("/emails/list-clients");

export const composeEmail = (payload) => base.post("/emails/send-email", payload);

export const saveEmailSettings = (payload) => base.post("/emails/save-email-settings", payload);
