import { Appwrite } from "appwrite";
import { useEffect, useState } from "react";
import Album from "./Album";
import Landing from "./Landing";
import { init } from "../services/appwrite";

const appwrite = new Appwrite();

export const Home = () => {
  // Init your Web SDK
  useEffect(() => {
    init(appwrite);
  }, []);

  return (
    <div>
      <Landing />
      {/* <Album /> */}
    </div>
  );
};
