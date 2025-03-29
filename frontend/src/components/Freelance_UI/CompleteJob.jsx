// import { useState } from "react";

// const CompleteJob = ({ contract }) => {
//   const [jobId, setJobId] = useState("");

//   const completeJob = async () => {
//     if (!contract || !jobId) return;
//     try {
//       const tx = await contract.completeJob(jobId);
//       await tx.wait();
//       alert("Job Completed & Payment Released!");
//     } catch (error) {
//       console.error("Error completing job:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="number"
//         placeholder="Job ID"
//         value={jobId}
//         onChange={(e) => setJobId(e.target.value)}
//         className="border p-2 rounded w-full"
//       />
//       <button
//         onClick={completeJob}
//         className="mt-2 bg-red-500 text-white p-2 rounded w-full"
//       >
//         Complete Job
//       </button>
//     </div>
//   );
// };

// export default CompleteJob;

// 3. CompleteJob.js - Allows Freelancer to Mark Job as Complete
import React, { useState } from "react";

const CompleteJob = ({ contract }) => {
  const [jobId, setJobId] = useState("");

  const completeJob = async () => {
    const tx = await contract.completeJob(jobId);
    await tx.wait();
    alert("Job Completed!");
  };

  return (
    <div className="border border-1 p-2 m-4 rounded-md">
      <h4>Complete Job</h4>
      <input
        type="text"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
        placeholder="Job ID"
      />
      <button className="border border-1 rounded-md p-2" onClick={completeJob}>
        Complete Job
      </button>
    </div>
  );
};

export default CompleteJob;
