const NoChatSelectPage = () => {
  return (
    <section className="p-4">
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4m12 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
            />
          </svg>
          <h1 className="text-xl font-semibold text-gray-700">No chat selected</h1>
          <p className="text-gray-500 mt-2">Please select a chat to start messaging.</p>
        </div>
      </div>
    </section>
  );
};

export default NoChatSelectPage;
