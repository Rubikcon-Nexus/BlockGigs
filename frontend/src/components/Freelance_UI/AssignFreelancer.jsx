// 4. AssignFreelancer.js - Assigns a Freelancer to a Job
import React, { useState } from "react";

const AssignFreelancer = ({ contract }) => {
  const [jobId, setJobId] = useState("");
  const [freelancerAddress, setFreelancerAddress] = useState("");

  const assignFreelancer = async () => {
    const tx = await contract.assignFreelancer(jobId, freelancerAddress);
    await tx.wait();
    alert("Freelancer Assigned!");
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h4>The Assign Freelancer a job</h4>
      <input
        type="text"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
        placeholder="Job ID"
      />
      <input
        type="text"
        value={freelancerAddress}
        onChange={(e) => setFreelancerAddress(e.target.value)}
        placeholder="Freelancer Address"
      />
      <button
        className="border border-1 rouded-md p-2"
        onClick={assignFreelancer}
      >
        Assign Freelancer
      </button>
    </div>
  );
};

export default AssignFreelancer;
