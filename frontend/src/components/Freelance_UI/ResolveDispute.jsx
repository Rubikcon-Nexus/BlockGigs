// 4. ResolveDispute.js - Allows Anyone to Resolve a Dispute
import React, { useState } from "react";

const ResolveDispute = ({ contract }) => {
  const [jobId, setJobId] = useState("");

  const resolveDispute = async () => {
    const tx = await contract.resolveDispute(jobId);
    await tx.wait();
    alert("Dispute Resolved!");
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h4>Resolve a Dispute</h4>
      <input
        type="text"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
        placeholder="Job ID"
      />
      <button
        className="border border-1 rounded-md p-2"
        onClick={resolveDispute}
      >
        Resolve Dispute
      </button>
    </div>
  );
};

export default ResolveDispute;
