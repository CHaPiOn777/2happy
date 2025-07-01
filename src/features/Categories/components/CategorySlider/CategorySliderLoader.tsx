import { ButtonLoader, TButtonSizes } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";

const CategorySliderLoader = ({
  itemsCount,
  size = "small",
}: {
  itemsCount: number;
  size?: TButtonSizes;
}) => {
  const itemsArray = new Array(itemsCount).fill(null);

  return (
    <Container>
      <div className="flex gap-4 pb-1">
        {itemsArray.map((_, index) => (
          <ButtonLoader key={index} size={size} />
        ))}
      </div>
    </Container>
  );
};

export default CategorySliderLoader;
