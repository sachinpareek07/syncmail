import base from "./base";

export const Adminlogin = (payload) => base.post("/auth/log-in", payload);
