import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import logo from "../../assets/3dcube.png";
import { FaArrowRightLong } from "react-icons/fa6";
import metamask from "../../assets/metamask.png";
import celo from "../../assets/celo.png";
import wallet from "../../assets/wallet.png";
import { Link } from "react-router-dom";
import { BrowserProvider, Contract } from "ethers";

// import the stellar wallet code
import SignTransactionComponent from "../StellarWallet/SignTransactionComponent";

// import the authComponent
import AuthComponent from "../StellarWallet/AuthComponent";

// Import the connectButton from the tsconfiguration for stellar
import { ConnectButton } from "@rainbow-me/rainbowkit";

import CONTRACT_ABI from "../../config/contractABI.json";
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [addr, setAddr] = useState("");
  const [balance, setBalance] = useState("");
  const [signature, setSignature] = useState("");
  const [signer, setSigner] = useState(null);
  const [roles, setRoles] = useState("talent");
  const [loading, setLoading] = useState(false);
  const [walletAccount, setWalletAccount] = useState(null);
  const [walletError, setWalletError] = useState(null);
  const [error, setError] = useState({});

  const [detectWallet, setDetectWallet] = useState(false);

  const handleSuccess = (account) => {
    setWalletAccount(account);

    console.log("Wallet connected:", account);
  };

  const handleError = (error) => {
    setWalletError(error);

    console.log("Wallet connection failed:", error);
  };

  // Add loading state to UI
  useEffect(() => {
    if (loading) {
      // You can add a loading spinner here
      document.body.style.cursor = "wait";
    } else {
      document.body.style.cursor = "default";
    }
  }, [loading]);

  const navigate = useNavigate(); //for page navigation

  const handleSubmit = (e) => {
    // console.log(CONTRACT_ABI);
    e.preventDefault(); //This will stop the form from submitting to itself

    //Checking if the email field is empty
    if (!email) {
      alert("Enter email address to continue!");
      return;
    }
    //Checking if the email address is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please put a valid email address!");
      return;
    }
    localStorage.setItem("email", email);
    localStorage.removeItem("detectWallet");

    // or
    localStorage.setItem("walletClicked", "false");
    localStorage.setItem("detectWallet", "false");
    //If email is valid, form can be sumbitted
    // alert("Continue to enter password!");

    // Navigate to verification page and pass the email as state
    navigate("/password", { state: { email } });
  };

  const handleGotoHome = () => {
    navigate("/");
  };

  const connectMetamask = async () => {
    if (!window.ethereum) {
      setWalletError("MetaMask is not installed!");
      return;
    }

    // set the walletClicked to track the submission using wallet registration
    // localStorage.setItem("walletClicked");
    localStorage.setItem("walletClicked", "true");
    localStorage.setItem("detectWallet", "true");

    setDetectWallet(true);

    try {
      setLoading(true);

      // Request accounts first - this is the most important step
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (!accounts || accounts.length === 0) {
        throw new Error("Please connect your MetaMask wallet");
      }

      const account = accounts[0];
      setAddr(account);

      // // Create provider and signer
      // const provider = new BrowserProvider(window.ethereum);
      // const signer = await provider.getSigner();
      // setSigner(signer);

      // Get balance and sign message in parallel to save time
      // const [
      // balanceHex,
      // signature
      // ] = await Promise.all([
      // window.ethereum.request({
      // method: "eth_getBalance",
      // params: [account, "latest"],
      // }),
      //   signer.signMessage(
      //     `Welcome to our platform! Please sign this message to verify your wallet ownership.\n\nWallet: ${account}\nTimestamp: ${Date.now()}`
      //   ),
      // ]);

      // Convert balance
      // const balance = parseInt(balanceHex, 16) / 10 ** 18;

      // // Update states
      // setBalance(balance);
      // setSignature(signature);

      // // Store essential data only
      localStorage.setItem("userAddress", account);
      // localStorage.setItem("walletSignature", signature);

      console.log("Wallet connected successfully");

      // // Immediate navigation
      navigate("/Persona", {
        replace: true, // Use replace to prevent back button issues
        state: {
          account,
          detectWallet,
          // signature,
          // balance,
        },
      });
    } catch (error) {
      console.error("MetaMask error:", error);
      setWalletError(error.message || "Failed to connect wallet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[url(/src/assets/bg.png)] bg-cover bg-center bg-no-repeat items-center">
      <div
        onClick={handleGotoHome}
        className="w-[103px] h-[37px] cursor-pointer flex justify-between items-center gap-2 ml-4 "
      >
        <img src={logo} alt="Blockgigs logo" className="mt-4" />
        <h1 className="font-normal text-[26.84px] leading-[37.12px] text-[#f3f3f3] font-oleo mt-4">
          Blockgigs
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen w-full">
        <div className="w-[320px] h-[550px] lg:w-[422px] lg:h-[615px] rounded-xl bg-[#ffffff] flex flex-col items-center">
          {/* -------------------- EMAIL FORM -------------------------- */}
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col items-center "
          >
            <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem] ">
              <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
                Sign Up
              </h2>
              <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
                Create an account with us by email or wallet
              </p>
            </div>

            <div className="w-[260px] lg:w-[350px] h-[103px] gap-1 flex flex-col items-start mt-[1.4rem]">
              <label
                htmlFor="email"
                className="font-montserrat font-medium text-[14px] leading-6 text-[#292929]"
              >
                Email Address
              </label>
              <div className="relative flex items-center mt-[-1.8rem]">
                <input
                  type="email"
                  placeholder="Continue with email"
                  // required
                  aria-required="true"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-[260px] lg:w-[350px] h-[47px] mt-[28px] px-[16px] py-[12px] gap-[16px] rounded-[6px] border-[1px]  border-[#DBDBDB] text-[14px] font-montserrat font-normal leading-[23px] text-[#a9a9a9]"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-0 lg:right-3  w-[36px] h-[33.33px] top-[35px] left-[220px] lg:left-[306px] rounded-[6.67px] p-[10px] gap-2.5 bg-[#2f66f6] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin rounded-full border-2 border-white border-t-transparent h-5 w-5"></span>
                      Loading...
                    </>
                  ) : (
                    <>
                      {" "}
                      <FaArrowRightLong className="text-[#fafafa] pointer-events-none " />{" "}
                    </>
                  )}
                </button>
              </div>

              <div className="flex justify-center items-center w-[320px] lg:w-[340px] h-[24px] gap-1 ml-[-2rem] lg:ml-[-1rem]">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="mt-[0.3rem]"
                  defaultChecked={true}
                  required
                  aria-required="true"
                />
                <p className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#292929]">
                  Agree to our{" "}
                  <span className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#2f66f6]">
                    Terms and Condition
                  </span>{" "}
                  and{" "}
                  <span className="font-montserrat font-medium text-[10px] lg:text-[12px] leading-6 text-[#2f66f6]">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </div>
          </form>{" "}
          <div className="flex justify-center items-center w-[260px] lg:w-[350px] h-[24px] gap-3 mt-[1.5rem]">
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
            <p className="mx-4 font-onset text-[#888888] font-normal text-[14px] leading-6">
              OR
            </p>
            <span className="flex-grow border-t text-[#e6e6e6]"></span>
          </div>
          {/* <div className="w-[350px] h-[64px] gap-2 flex flex-col items-center mt-[1rem] lg:mt-[3rem] ">
            <h2 className="font-montserrat font-semibold text-[20px] lg:text-2xl leading-8 text-[#292929]">
              Sign Up
            </h2>
            <p className="font-montserrat font-medium text-[12px] lg:text-[14px] leading-6 text-[#676767]">
              Create an account with us by connecting your wallet
            </p>
          </div> */}
          <div className="flex flex-col items-center gap-3 w-[300px] lg:w-[350px] h-[192px] ">
            <button
              onClick={connectMetamask}
              disabled={loading}
              className={`flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ${
                loading ? "opacity-50" : ""
              }`}
            >
              <img src={metamask} alt="metamask logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                {loading ? "Connecting..." : "Connect Metamask"}
              </span>
            </button>

            {/* <SignTransactionComponent /> */}

            <AuthComponent />
            {/* Error display */}
            {/* {walletError && (
              <div className="text-red-500 text-sm mt-2 text-center">
                {walletError}
              </div>
            )} */}

            {/* <div className="flex justify-center items-center w-[260px] lg:w-[350px] h-[24px] gap-3 mt-[1.5rem]">
              <span className="flex-grow border-t text-[#e6e6e6]"></span>
              <p className="mx-4 font-onset text-[#888888] font-normal text-[14px] leading-6">
                OR
              </p>
              <span className="flex-grow border-t text-[#e6e6e6]"></span>
            </div> */}

            {/* <button className="flex items-center cursor-pointer w-[250px] lg:w-[350px] h-[56px] px-[24px] py-[16px] gap-[16px] rounded-[16px] border border-[#E8E8E8] bg-[#FAFAFA] ">
              <img src={wallet} alt="wallet logo" />
              <span className="font-montserrat font-medium text-[14px] leading-6 text-[#272954]">
                Wallet connect
              </span>
            </button> */}

            {/* UNCOMMENT HERE TO USE THE WALLET CONNECT BUTTON */}
            {/* <div className="mt-10">
              <ConnectButton label="Wallet Connect" />

            </div> */}
          </div>
          {/* Fix this */}
          {walletError && (
            <div className="text-red-500 text-sm mt-2 text-center">
              {walletError}
            </div>
          )}
          {/* {walletError && <p className="text-red-800">Error: {walletError}</p>} */}
          <div className="w-[273px] h-[24px] gap-1 flex justify-center items-center mt-8">
            <p className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#292929]">
              Already have an account?
            </p>
            <Link
              to="/signin"
              className="font-montserrat font-medium text-[14px] lg:text-base leading-6 text-[#2f66f6] cursor-pointer"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
