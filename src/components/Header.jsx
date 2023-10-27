const Header = () => {
  return (
    <header className=" bg-[url('/images/backgroundHeader.jpg')]  w-full min-h-[180px] flex justify-center items-center   ">
      <div className="  bg-cover  bg-center flex justify-center relative overflow-visible">
        <img
          className="min-w-[110px] min-h-[240px] object-cover object-center  max-h-[120px]  animate-pulse  "
          src="/images/portal.png"
          alt=""
        />

        <img
          className=" w-[300px] absolute bottom-[50%] "
          src="/images/logo.png"
          alt=""
        />
      </div>
    </header>
  );
};
export default Header;
