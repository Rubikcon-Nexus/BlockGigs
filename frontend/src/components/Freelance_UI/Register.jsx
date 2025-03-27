// 2. Register.js - Handles Registration for Clients and Freelancers
import React, { useState } from "react";
import { ethers } from "ethers";

const Register = ({ contract, address }) => {
  const [name, setName] = useState("");

  const registerClient = async () => {
    const tx = await contract.registerClient();
    await tx.wait();
    alert("Client Registered!");
  };

  const registerFreelancer = async () => {
    const tx = await contract.registerFreelancer(name);
    await tx.wait();
    alert("Freelancer Registered!");
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h3>The Registration Component</h3>
      <button
        className="border border-1 rounded-md p-2 m-2"
        onClick={registerClient}
      >
        Register as Client
      </button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Freelancer Name"
      />
      <button
        className="border border-1 rounded-md p-2"
        onClick={registerFreelancer}
      >
        Register as Freelancer
      </button>
    </div>
  );
};

export default Register;
