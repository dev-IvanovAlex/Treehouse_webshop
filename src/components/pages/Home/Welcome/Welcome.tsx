import ButtonWithArrow from "../../../ButtonWithArrow/ButtonWithArrow";

const Welcome = () => {
  return (
    <section className="grid last: sm:grid-cols-[60%_40%]  mt-[120px]  text-[#50735F] justify-center ">
      <img
        className="max-h-[517px] ml-auto"
        src="../src/assets/images/Comp1.png"
        alt=""
      />
      <div className="max-w-[280px] mt-8 ml-8">
        <p>WELCOME</p>
        <h2 className="pt-[13px] text-5xl">Hi, meet TreeHouse.</h2>
        <p className="mt-4 text-sm">
          Mindfully crafted gender-neutral children's clothing focused on your
          little one and designed with great care for our planet and the people
          on it.
        </p>
        <div className=" inline-flex  cursor-pointer text-[#50735F]">
          <ButtonWithArrow
            arrowRoundedStyles={
              "border-2 border-[#50735F]  text-nowrap group-hover:bg-[#ffa136] group-hover:text-[#726454] group-active:bg-[#50735F] group-active:text-white transition-all"
            }
            buttonStyles={
              "border-2 border-[#50735F] text-[#50735F] group-hover:bg-[#ffa136]  group-active:bg-[#50735F]  transition-all group-active:text-white "
            }
            arrowStyle={
              "[&>path]:fill-[#50735F]  [&>path]:group-hover:fill-[#726454] [&>path]:group-active:fill-white [&>path]:transition-all"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
