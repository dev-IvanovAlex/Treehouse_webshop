import CardHome from "../../../CardHome";
import Arrow from "../../../SVG/Arrow/Arrow";

const ProductsSlider = () => {
  return (
    <div className="relative px-[1%] sm:px-[2%] md:px-[3%] lg:px-[4%] xl:px-[5%] h-[500px] sm:h-[700px] ">
      <div className="flex justify-between">
        <div className="text-[#50735F]">
          <p className="text-sm">YOUR PERFECT MATCH</p>
          <h3 className="mt-15 text-5xl">Shop the look</h3>
        </div>
        <div className="flex items-end gap-x-3">
          <button className="bg-[#50735F] bg-opacity-25 rounded-full p-2 cursor-pointer group hover:bg-[#7cb193] active:bg-[#50735F] ">
            <Arrow style="rotate-180 [&>path]:fill-[#50735F] [&>path]:group-hover:fill-[#C58A46]" />
          </button>
          <button className="bg-[#C58A46] bg-opacity-25 rounded-full p-2 cursor-pointer hover:bg-[#ffa136] active:bg-[#50735F] ">
            <Arrow style="" />
          </button>
        </div>
      </div>

      <div className="mt-9">
        <div className="grid grid-cols-3 gap-x-2">
          <CardHome />
          <CardHome />
          <CardHome />
        </div>
      </div>
      <div className="bg-[#D9C7BB] absolute h-[300px] sm:h-[400px] right-0 left-0 top-[33%] z-[-1]">
        <img
          className="absolute max-h-[100px] sm:max-h-[150px] left-0 bottom-[-13%]"
          src="../src/assets/images/leaf 3.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ProductsSlider;
