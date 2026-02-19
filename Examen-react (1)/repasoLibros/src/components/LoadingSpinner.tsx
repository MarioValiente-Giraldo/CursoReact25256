const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className=" animate-spin rounded-full h-16 w-16 border-4  border-indigo-500 border-t-indigo-800" />
    </div>
  );
};

export default LoadingSpinner;