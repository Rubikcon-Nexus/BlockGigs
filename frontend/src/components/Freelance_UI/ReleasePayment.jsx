import React, { useState } from "react";

const ReleasePayment = ({ contract }) => {
  const [jobId, setJobId] = useState("");

  const approveCompletion = async () => {
    const tx = await contract.approveCompletion(jobId);
    await tx.wait();
    alert("Job Approved!");
  };

  const releasePayment = async () => {
    const tx = await contract.releasePayment(jobId);
    await tx.wait();
    alert("Payment Released!");
  };

  return (
    <div className="border border-1 rounded-md p-2 m-4">
      <h4>The Approval and release of funds by Client</h4>
      <input
        type="text"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
        placeholder="Job ID"
      />
      <button
        className="border border-1 rounded-md p-2 m-4"
        onClick={approveCompletion}
      >
        Approve Completion
      </button>
      <button
        className="border border-1 rounded-md p-2 m-4"
        onClick={releasePayment}
      >
        Release Payment
      </button>
    </div>
  );
};

export default ReleasePayment;
