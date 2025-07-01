import {
  RadioColorsGroup,
  RadioGroupColor,
} from "@/features/Products/components/Colors/RadioColors";
import { VariationEntity } from "@/features/Products/utils/getProductVariationOptions";
import { Separator } from "@/shared/components/UI/Separator";

const ProductInfoColors = ({
  color,
  colors,
  handleColorChange,
  defaultColors,
  isLoading,
}: {
  color: string;
  colors: VariationEntity[] | undefined;
  handleColorChange: (value: string) => void;
  defaultColors: string[];
  isLoading?: boolean;
}) => {
  const colorsAreLoaded = !isLoading && colors?.length;
  const hasNoColors = !isLoading && colors?.length === 0;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-body1">Цвет</span>
        {color && (
          <>
            <Separator className="h-4" orientation="vertical" />
            <span className="text-description text-gray-middle">{color}</span>
          </>
        )}
      </div>
      {isLoading && (
        <RadioColorsGroup disabled className="flex gap-2">
          {defaultColors.map((item, index) => (
            <RadioGroupColor disabled key={index} value={item} color={item} />
          ))}
        </RadioColorsGroup>
      )}
      {colorsAreLoaded ? (
        <RadioColorsGroup
          value={color}
          className="flex gap-2"
          onValueChange={(item) => handleColorChange(item)}
        >
          {colors?.map((item) => (
            <RadioGroupColor
              key={item.name}
              value={item.name}
              color={item.name}
            />
          ))}
        </RadioColorsGroup>
      ) : null}

      {hasNoColors && <div>У товара нет цветов</div>}
    </div>
  );
};

export default ProductInfoColors;
