import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { Button } from "@/shared/components/UI/Button";
import { Chip } from "@/shared/components/UI/Chip";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";

const FavoriteCard = () => {
  return (
    <article className="flex gap-12 w-full py-8 border-b border-gray">
      <ImageWithLoader
        wrapperClassName="w-[120px] h-[176px] shrink-0"
        src="/images/Home/Main/slider-1.jpg"
        alt="test"
      />
      <div className="flex flex-col w-full justify-between pr-6 border-r border-gray">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4">
            <h5 className="text-h5">
              Платье трикотажное с отделкой из сетки и принтом /
            </h5>
            <Chip className="uppercase" variant="red" size="normal">
              Final Sale
            </Chip>
          </div>

          <div className="text-description lg:text-h5 flex flex-col items-center gap-2">
            <span className={"line-through text-gray-middle"}>85 500 ₸</span>
            <span>25 500 ₸</span>
            <Chip variant="pink" size="small">
              - {70} %
            </Chip>
          </div>
        </div>
        <div className="flex justify-between gap-6">
          <div className="flex gap-2">
            <IconButton
              className="border border-gray"
              variant="secondary"
              size="small"
            >
              <MinusIcon />
            </IconButton>
            <div className="text-body2 py-2 px-8 bg-gray-light">1</div>
            <IconButton
              className="border border-gray "
              variant="secondary"
              size="small"
            >
              <PlusIcon />
            </IconButton>
          </div>
          <IconButton
            className="border border-gray "
            variant="secondary"
            size="small"
          >
            <TrashIcon />
          </IconButton>
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center h-auto">
        <Button size="medium">В корзину</Button>
        <Button variant="secondary" size="medium">
          Изменить
        </Button>
      </div>
    </article>
  );
};

export default FavoriteCard;
