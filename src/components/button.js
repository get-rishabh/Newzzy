const Button = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex items-center justify-center w-full h-full px-8 py-1 text-sm font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 backdrop-blur-3xl">
        Read More
      </span>
    </button>
  );
};

export default Button;
