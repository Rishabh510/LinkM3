import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

export const ConnectWallet = ({ userData, setUserData }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // Checks if wallet is connected
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (ethereum) {
      console.log("Got the ethereum obejct: ", ethereum);
    } else {
      console.log("No Wallet found. Connect Wallet");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      console.log("Found authorized Account: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No authorized account found");
    }
  };

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Found account", accounts[0]);
      setCurrentAccount(accounts[0]);
      setUserData({ ...userData, walletAddress: accounts[0] });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  //   useEffect(() => {
  //     checkIfWalletIsConnected();
  //   }, []);

  return (
    <div>
      <Button variant="outlined" onClick={connectWallet}>
        🦊
      </Button>
      Connect Wallet
    </div>
  );
};
