import { Appwrite, Query } from "appwrite";

export const appwrite = new Appwrite();
export const init = () => {
  appwrite
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
};
init();

export const magicLink = async (email) => {
  return await appwrite.account.createMagicURLSession(
    "unique()",
    email,
    "http://localhost:3000/verify"
  );
};

export const magicLinkVerify = async (userId, secret) => {
  return await appwrite.account.updateMagicURLSession(userId, secret);
};

export const getUser = async () => {
  return await appwrite.account.get();
};
export const createFile = async (id, file) => {
  return await appwrite.storage.createFile("photos", id, file);
};
export const uploadUserData = async (id, data) => {
  return await appwrite.database.createDocument("users", id, data);
};
export const updateUserData = async (id, data) => {
  return await appwrite.database.updateDocument("users", id, data);
};
export const getUserData = async (id) => {
  return await appwrite.database.getDocument("users", id);
};
export const getAllUsers = async (query = "") => {
  if (query.length)
    return await appwrite.database.listDocuments("users", [
      Query.search("walletAddress", query),
    ]);
  return await appwrite.database.listDocuments("users");
};
export const logoutUser = async () => {
  return await appwrite.account.deleteSession("current");
};
