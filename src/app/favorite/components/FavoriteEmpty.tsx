import { paths } from "@/config/paths";
import { Button } from "@/shared/components/UI/Button";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";
import Link from "next/link";

const FavoriteEmpty = () => {
  const isMobile = useMediaCustom("md");
  return (
    <div className="text-center space-y-6 sm:space-y-8">
      <div className="space-y-4">
        <h2 className="text-h2">Здесь пусто</h2>
        <p>Посмотрите интересующие вас товары в каталоге</p>
      </div>
      <Button size={isMobile ? "small" : "normal"} asChild>
        <Link href={paths.catalog.getHref()}>Перейти в каталог</Link>
      </Button>
    </div>
  );
};

export default FavoriteEmpty;
