export const FallBack = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="grid  place-content-center justify-items-center my-12 gap-4">
      <p className="text-ravn-emphasis text-[1.9rem] font-bold">
        Failed to Load Data
      </p>
      <span className="text-ravn-light font-medium text-[1.6rem]">
        Refresh the page
      </span>
      <button
        onClick={handleRefresh}
        className="text-white
        bg-black 
        rounded-full 
        text-[1.5rem]
        font-medium
        px-10
        py-2
        transition-all
        duration-300
        ease-in-out
        hover:opacity-80
        "
      >
        Try again
      </button>
    </div>
  );
};
