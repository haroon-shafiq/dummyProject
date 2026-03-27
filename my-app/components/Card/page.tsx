
const Card = ({ buttonText }: { buttonText: string }) => {
  return (
    <div className="w-full sm:w-[48%] lg:w-[31%] bg-[#1978E5] p-6 sm:p-8 md:p-10 rounded-[12px]">
      <p className="text-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium">
        {buttonText}
      </p>
    </div>
  );
};

export default Card;
