// components/ErrorFallback.jsx

const ErrorFallback = ({
  title = "Something went wrong",
  description = "Please try again later.",
}) => {
  return (
    <div className="w-full py-10 text-center">
      <h2 className="text-2xl font-semibold text-red-600">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

export default ErrorFallback;
