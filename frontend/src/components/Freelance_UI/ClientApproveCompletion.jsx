import { useState } from "react";

function ClientApproveCompletion({ contract, address }) {
  const [jobId, setJobId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleApproveCompletion = async () => {
    if (!contract) {
      setMessage("Contract not connected");
      return;
    }
    if (!jobId) {
      setMessage("Please enter a Job ID");
      return;
    }
    try {
      setLoading(true);
      const tx = await contract.approveCompletion(jobId);
      await tx.wait();
      setMessage("Job completion approved successfully");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Approve Job Completion</h2>
      <input
        type="text"
        value={jobId}
        onChange={(e) => setJobId(e.target.value)}
        placeholder="Enter Job ID"
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleApproveCompletion}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Approving..." : "Approve Completion"}
      </button>
      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
}

export default ClientApproveCompletion;
