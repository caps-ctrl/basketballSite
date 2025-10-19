const Navbar = () => {
  return (
    <div className="flex  w-screen   items-center border-b-3 border-yellow-500 ">
      <div className=" w-[30%]">(tu logo)</div>
      <h1 className="font-bold font-handwritten justify-center p-2 text-4xl w-[40%] flex items-center">
        School
        <span className="text-xl relative top-1 ml-1 -mr-0.5 ">🏀</span>f Basket
      </h1>
      <ul className="flex w-[30%] gap-4">
        <li>About us</li>
        <li>FAQ</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
