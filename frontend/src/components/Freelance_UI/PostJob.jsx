// import { useState } from "react";
// import { ethers } from "ethers";

// const PostJob = ({ contract }) => {
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const [title, setTitle] = useState("");

//   const postJob = async () => {
//     if (!contract || !title || !description || !amount) return;
//     try {
//       const tx = await contract.postJob(
//         title,
//         description,
//         ethers.utils.parseUnits(amount, 6)
//       );
//       await tx.wait();
//       alert("Job Posted Successfully!");
//     } catch (error) {
//       console.error("Error posting job:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="border p-2 rounded w-full mt-2"
//       />

//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         className="border p-2 rounded w-full mt-2"
//       />
//       <input
//         type="number"
//         placeholder="Amount (USDC)"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="border p-2 rounded w-full mt-2"
//       />
//       <button
//         onClick={postJob}
//         className="mt-2 bg-purple-500 text-white p-2 rounded w-full cursor-pointer"
//       >
//         Post Job
//       </button>
//     </div>
//   );
// };

// export default PostJob;

// 3. PostJob.js - Handles Job Posting
import React, { useState } from "react";
import { ethers } from "ethers";

const PostJob = ({ contract }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [deadline, setDeadline] = useState("");

  const postJob = async () => {
    const tx = await contract.postJob(
      description,
      ethers.utils.parseEther(amount),
      deadline
    );
    await tx.wait();
    alert("Job Posted!");
  };

  return (
    <div>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Job Description"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (ETH)"
      />
      <input
        type="text"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Deadline (Timestamp)"
      />
      <button onClick={postJob}>Post Job</button>
    </div>
  );
};

export default PostJob;
