function Toast({ message, type }) {
  const colors = {
    success: "bg-green-600",
    error: "bg-red-600",
  };

  return (
    <div
      className={`${colors[type]} text-white px-4 py-2 rounded fixed bottom-6 right-6 shadow-lg`}
    >
      {message}
    </div>
  );
}

export default Toast;
