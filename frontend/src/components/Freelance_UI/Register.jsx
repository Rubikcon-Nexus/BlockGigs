// 2. Register.js - Handles Registration for Clients and Freelancers
import React, { useState } from "react";

const Register = ({ contract }) => {
  const [name, setName] = useState("");

  const registerClient = async () => {
    if (!contract) {
      alert("Contract not loaded yet, connect wallet");
      return;
    }
    try {
      const tx = await contract.registerClient({
        gasLimit: 3000000,
        // Manually set a gas limit
      });
      await tx.wait();
      alert("Client Registered!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert(`Registration failed: ${error.reason || error.message}`);
    }
  };

  const registerFreelancer = async () => {
    if (!contract) {
      alert("Contract not loaded yet,  connect wallet");
      return;
    }
    try {
      const tx = await contract.registerFreelancer(name);
      await tx.wait();
      alert("Freelancer Registered!");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h3>The Registration Component</h3>
      <button
        className="border border-1 rounded-md p-2 m-2 bg-red-200"
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
        className="border border-1 rounded-md p-2 bg-teal-300"
        onClick={registerFreelancer}
        // onClick={alert("Cliecked on the Register as a freelancer")}
      >
        Register as Freelancer
      </button>
    </div>
  );
};

export default Register;
