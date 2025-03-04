import { Environment, ParaWeb } from "@getpara/react-sdk";

const PARA_API_KEY = process.env.NEXT_PUBLIC_PARA_API_KEY;

if (!PARA_API_KEY) {
  throw new Error("PARA_API_KEY is not set");
}

export const para = new ParaWeb(Environment.SANDBOX, PARA_API_KEY);
