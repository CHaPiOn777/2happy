import { ReactNode } from "react";
import { useSwiper } from "swiper/react";

const SliderButton = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "next" | "prev";
}) => {
  const swiper = useSwiper();

  const handleClick = () => {
    if (type === "next") swiper.slideNext();
    else swiper.slidePrev();
  };
  return <button onClick={handleClick}>{children}</button>;
};

export default SliderButton;
