// 1. ApproveSpending.js - Approves USDC/USDT Spending by Client
import React, { useState } from "react";

const usdcContract = new ethers.Contract(
  USDC_CONTRACT_ADDRESS,
  ERC20_ABI,
  signer
);
await usdcContract.approve(CONTRACT_ADDRESS, ethers.parseUnits("100", 6));

const ApproveSpending = ({ contract }) => {
  const [spender, setSpender] = useState("");
  const [amount, setAmount] = useState("");

  const approveSpending = async () => {
    const tx = await contract.approve(spender, amount);
    await tx.wait();
    alert("Spending Approved!");
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h4>Approve Token Spending</h4>
      <input
        type="text"
        value={spender}
        onChange={(e) => setSpender(e.target.value)}
        placeholder="Spender Address"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button
        className="border border-1 rounded-md p-2"
        onClick={approveSpending}
      >
        Approve
      </button>
    </div>
  );
};

export default ApproveSpending;
