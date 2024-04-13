import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "SUPER SECRET";

export const getDBToken = (payload: string | object | Buffer) => {
  return jwt.sign(payload, JWT_SECRET);
};

export const getUserFromDBToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
