import { FaSpinner } from "react-icons/fa";

const LoaderCom = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-4xl text-purple-600" />
        <p className="mt-4 text-gray-700 font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoaderCom;
