import CheckIcon from "@/shared/components/icons/CheckIcon";
import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import Container from "@/shared/components/UI/Container";
import TabTitle from "@/shared/components/UI/TabTitle";
import Image from "next/image";

const KaspiTab = () => {
  return (
    <Container className=" flex-col gap-12 sm:gap-16">
      <div className="space-y-8">
        <div className="flex gap-4 items-center">
          <Image
            width={92}
            height={40}
            src="/images/Help/kaspi-logo.png"
            className="rounded-xs"
            quality={100}
            alt="kaspi-log"
          />
          <h2 className="text-h2">Рассрочка от KASPI /</h2>
        </div>
        <p className="text-body2">
          Оформляйте покупки легко — в удобную рассрочку через Kaspi. Быстро,
          просто и без переплат.
        </p>
      </div>
      <div className="space-y-8">
        <TabTitle>1. Как оформить заказ в рассрочку</TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-gray-dark">
            При оформлении заказа выберите способ оплаты «KaspiBank» (оплата
            через сайт или приложение Kaspi.kz)
          </li>
          <li className="text-placeholder text-gray-dark">
            Нажмите кнопку «Перейти к оплате»
          </li>
          <li className="text-placeholder text-gray-dark">
            Вы будете перенаправлены в приложение Kaspi.kz (на телефоне
            или в браузере)
          </li>
          <li className="text-placeholder text-gray-dark">
            Если по вашей карте доступен лимит — приложение предложит оформить
            покупку в рассрочку
          </li>
          <li className="text-placeholder text-gray-dark">
            Подтвердите оплату — и всё готово!
          </li>
        </ul>
      </div>
      <div className="space-y-8">
        <TabTitle>2. Сроки рассрочки</TabTitle>
        <ul className="pl-6 list-disc space-y-4 flex-1 ">
          <li className="text-placeholder text-main">
            Стандартный срок: 3 месяца
          </li>
          <li className="text-placeholder text-gray-dark">
            Дополнительно возможны варианты на:{" "}
            <span className="text-main">4, 12</span>
             или <span className="text-main">24</span>  месяца — по программе{" "}
            <span className="text-main">Kaspi Жума</span>
          </li>
          <li className="text-placeholder text-gray-dark">
            Условия одобрения и срок рассрочки устанавливает банк Kaspi.kz
            индивидуально
          </li>
        </ul>
      </div>

      <div className="space-y-8">
        <TabTitle>3. Условия</TabTitle>
        <ul className="pl-6 list-disc space-y-4 flex-1 ">
          <li className="text-placeholder text-main">
            Только для граждан РК с активным Kaspi Red
          </li>
          <li className="text-placeholder text-gray-dark">
            Минимальная сумма заказа: от 5 000 ₸
          </li>
          <li className="text-placeholder text-gray-dark">
            Только для онлайн-оплаты через Kaspi Bank
          </li>
        </ul>
        <div className="flex gap-2">
          <div className="w-6 h-6 bg-black">
            <CheckIcon className="fill-white" />
          </div>
          Рассрочка не действует на товары со скидкой!
        </div>
      </div>
      <div className="space-y-8">
        <TabTitle titleClass="flex gap-2">
          <InfoBoldIcon />
          Важно знать
        </TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-gray-dark">
            В случае возврата товара — средства возвращаются на Kaspi счёт
          </li>
          <li className="text-placeholder text-gray-dark">
            Мы не принимаем решение по одобрению рассрочки — оно приходит
            от Kaspi
          </li>
          <li className="text-placeholder text-gray-dark">
            Если рассрочка недоступна, Kaspi предложит оплату картой
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default KaspiTab;
