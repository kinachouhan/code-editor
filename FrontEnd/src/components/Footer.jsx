export const Footer = () => {
  return (
    <footer className=" flex flex-col md:flex-row justify-between items-center py-4 px-5 md:px-10 text-sm md:text-base">
      {/* Left side */}
      <div className="mb-2 md:mb-0 text-center md:text-left">
        <h1 className="text-gray-400">@2025 DevSync, All rights reserved</h1>
      </div>

      {/* Right side */}
      <div className="flex gap-6 flex-wrap justify-center md:justify-end">
        <h1 className="hover:underline cursor-pointer">Terms of Service</h1>
        <h1 className="hover:underline cursor-pointer">Privacy</h1>
      </div>
    </footer>
  );
};
