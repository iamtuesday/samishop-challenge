import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main
      className="flex 
    flex-col 
    items-center 
    justify-center 
    flex-1 
    min-h-screen
    gap-[10rem] 
    tabletxl:flex-row
    bg-ravn-black
    "
    >
      <figure
        className="h-auto 
      rounded-[1.5rem] 
      overflow-hidden 
      hidden 
      laptop:w-[calc(55rem_*_var(--scale))]
      laptop:block
      "
      >
        <img
          className="h-full w-full "
          src="https://w0.peakpx.com/wallpaper/128/374/HD-wallpaper-star-wars-the-last-jedi-rey-from-star-wars-luke-skywalker-lightsaber.jpg"
          alt="Star wars wallpaper"
        />
      </figure>

      <div
        className="flex 
      flex-col 
      items-center 
      justify-center 
      gap-[2.5rem]
      "
      >
        <h1
          className="flex 
        items-center 
        justify-center 
        gap-3 
        text-[5.5rem] 
        font-bold 
        text-ravn-emphasis
        laptop:text-[calc(6rem_*_var(--scale))]

        "
        >
          Swapi
        </h1>

        <p
          className="text-[2.5rem] 
        text-white 
        font-semibold 
        text-center
        leading-[150%]
        px-[3rem]
        laptop:px-0
        laptop:max-w-[calc(50rem_*_var(--scale))] 
        laptop:text-[calc(2.9rem_*_var(--scale))]
        "
        >
          A brief implementation of swapi where you can explore the amazing
          world of Star Wars
        </p>

        <NavLink
          to={"/people"}
          className="flex 
          items-center 
          justify-center 
          px-[3rem]
          py-[1.5rem]
          text-[1.9rem]
          font-semibold
          rounded-[1rem]
          cursor-pointer 
          bg-white
          text-ravn-black
          hover:bg-ravn-emphasis
          hover:text-white
          transition-all 
          duration-500
          laptop:px-[calc(3rem_*_var(--scale))]
          laptop:py-[calc(1.5rem_*_var(--scale))]
          laptop:text-[calc(1.9rem_*_var(--scale))]
          "
        >
          People
        </NavLink>
      </div>
    </main>
  );
};
