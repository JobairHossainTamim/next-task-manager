const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-70">
      <div className="w-20 h-20 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
