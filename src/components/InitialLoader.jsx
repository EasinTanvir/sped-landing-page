import { FaSpinner } from "react-icons/fa";

export default function InitialLoader({ className = "" }) {
  return (
    <div
      className={`min-h-[40vh] flex items-center justify-center pb-40 ${className}`}
      style={{ backgroundColor: "#F3F2EB" }}
    >
      <div className="flex flex-col items-center gap-4">
        <FaSpinner
          className="animate-spin text-[40px]"
          style={{ color: "#BDBD34" }}
        />
        <p className="text-[#BDBD34] font-semibold text-lg">Please Wait...</p>
      </div>
    </div>
  );
}
