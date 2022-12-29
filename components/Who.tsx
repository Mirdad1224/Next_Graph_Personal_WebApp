import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Hi there! It`s Ali Mirdad; a JavaScript-lover frontend developer,
          specialised in React.I am seeing a full-time position in the react in
          which I can put into practice my knowledge and experience, ultimately
          benefiting the operations of the organisation that I work for.
        </p>
      </div>
    </div>
  );
};

export default Who;
