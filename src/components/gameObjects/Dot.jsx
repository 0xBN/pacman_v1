const Dot = () => {
  return (
    <div
      className={`text-transparent relative bg-black before:absolute before:w-1 before:h-1 before:bg-yellow-500 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full`}
    >
      .
    </div>
  );
};
export default Dot;
