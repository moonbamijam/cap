import dotenv from "dotenv";
dotenv.config();

export const checkEnv = (key: string): string => {
  const value = process.env[key];
  if (!value)
    throw new Error(`Environment variable named "${key}" is missing or empty.`);

  return value;
};
