import { paths } from "@/config/paths";
import { HELP_TABS } from "@/features/User/utils/isValidHelpTab";
import Link from "next/link";

const MenuHelp = ({ handleCloseSheet }: { handleCloseSheet: () => void }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-4">
        <h3 className="text-h3">Помощь покупателю</h3>
        <p className="text-description">
          Здесь вы найдёте ответы на популярные вопросы о доставке, оплате,
          возврате и других аспектах покупки. Если не нашли нужной информации —
          мы всегда готовы помочь вам лично.
        </p>
      </div>
      <ul>
        <li>
          <Link
            className="flex items-center justify-between py-3"
            href={paths.help.getHref({ tab: HELP_TABS["REFUNDS"] })}
            onClick={handleCloseSheet}
          >
            <span className="text-button-normal ">Возврат и обмен</span>
          </Link>
        </li>

        <li>
          <Link
            className="flex items-center justify-between py-3"
            href={paths.help.getHref({ tab: HELP_TABS["DELIVERY"] })}
            onClick={handleCloseSheet}
          >
            <span className="text-button-normal ">Доставка и оплата</span>
          </Link>
        </li>

        <li>
          <Link
            className="flex items-center justify-between py-3"
            href={paths.help.getHref({ tab: HELP_TABS["KASPI"] })}
            onClick={handleCloseSheet}
          >
            <span className="text-button-normal ">Рассрочка от KASPI RED</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuHelp;
