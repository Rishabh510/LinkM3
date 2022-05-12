const sdk = require("node-appwrite");

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - object with request body data
    'env' - object with environment variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
*/

module.exports = async function (req, res) {
  const client = new sdk.Client();
  const USERS_COLLECTION = req.env["USERS_COLLECTION"];
  const WEEKUSER_COLLECTION = req.env["WEEKUSER_COLLECTION"];

  // You can remove services you don't use
  let account = new sdk.Account(client);
  let avatars = new sdk.Avatars(client);
  let database = new sdk.Database(client);
  let functions = new sdk.Functions(client);
  let health = new sdk.Health(client);
  let locale = new sdk.Locale(client);
  let storage = new sdk.Storage(client);
  let teams = new sdk.Teams(client);
  let users = new sdk.Users(client);

  if (!req.env["APPWRITE_ENDPOINT"] || !req.env["APPWRITE_API_KEY"]) {
    console.warn(
      "Environment variables are not set. Function cannot use Appwrite SDK."
    );
  } else {
    client
      .setEndpoint(req.env["APPWRITE_ENDPOINT"])
      .setProject(req.env["APPWRITE_PROJECT_ID"])
      .setKey(req.env["APPWRITE_API_KEY"]);
    // .setSelfSigned(true);
  }
  let response = "",
    profile = "";

  try {
    const profiles = await database.listDocuments(USERS_COLLECTION);
    console.log(profiles);
    const rnd = Math.floor(Math.random() * profiles.total);
    profile = profiles.documents[rnd].$id;
    console.log(profile);
  } catch (error) {
    res.send(error, 500);
  }
  try {
    response = await database.updateDocument(
      WEEKUSER_COLLECTION,
      "weekUser",
      {
        id: profile,
      },
      ["role:all"]
    );
    res.json(response);
  } catch (error) {
    res.send(error, 500);
  }
  res.json(response);
};
