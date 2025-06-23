import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import Container from "@/shared/components/UI/Container";
import TabTitle from "@/shared/components/UI/TabTitle";

const DeliveryTab = () => {
  return (
    <Container className=" flex-col gap-12 sm:gap-16">
      <div className="space-y-8">
        <h2 className="text-h2  ">Доставка и оплата /</h2>
        <p className="text-body2">
          Мы доставляем заказы по всему Казахстану и странам СНГ удобным
          для вас способом.
        </p>
      </div>
      <div className="space-y-8">
        <TabTitle>1. Самовывоз из магазина</TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-gray-dark">
            Вы можете забрать заказ самостоятельно из магазина
            по адресу: г.. Алматы, Самал 1, дом. 31
          </li>
          <li className="text-placeholder text-gray-dark">
            Время работы: 10:00–20:00, ПН–ВС
          </li>
        </ul>
      </div>
      <div className="space-y-8">
        <TabTitle>2. Курьерская доставка по Алматы (Яндекс)</TabTitle>
        <div className="flex flex-col md:flex-row gap-4 md:gap-24">
          <ul className="pl-6 list-disc space-y-4 flex-1 ">
            <li className="text-placeholder text-main">
              Стоимость определяется Яндексом в зависимости от адреса
            </li>
            <li className="text-placeholder text-main">
              Бесплатно при заказе от 500 000 ₸
            </li>
            <li className="text-placeholder text-gray-dark">
              Возможна доставка в день заказа, если оформить до 17:00
            </li>
            <li className="text-placeholder text-gray-dark">
              Заказы после 17:00 — доставка на следующий день (заказы в пятницу
              после 17:00 отправляются в понедельник)
            </li>
          </ul>
          <ul className="pl-6 list-disc  space-y-4 flex-1">
            <li className="text-placeholder text-main">
              Срок доставки: 1–2 рабочих дня
            </li>
            <li className="text-placeholder text-main">
              Время доставки: 09:00–20:00 (ПН–ПТ)
            </li>
            <li className="text-placeholder text-main">
              Менеджер связывается перед отправкой
            </li>
            <li className="text-placeholder text-main">
              При отказе от покупки — стоимость доставки удерживается
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-8">
        <TabTitle>3. Курьерская доставка в Астану</TabTitle>

        <div className="flex flex-col md:flex-row gap-4 md:gap-24">
          <ul className="pl-6 list-disc space-y-4 flex-1">
            <li className="text-placeholder text-main">
              Стандарт: от 2 700 ₸ (до 3 рабочих дней)
            </li>
            <li className="text-placeholder text-main">
              Экспресс: от 3 500 ₸ (до 1–2 рабочих дней)
            </li>
            <li className="text-placeholder text-gray-dark">
              Бесплатно при заказе от 500 000 ₸ (без примерки)
            </li>
            <li className="text-placeholder text-gray-dark">
              При отказе/обмене — стоимость доставки удерживается с покупателя
              в обе стороны
            </li>
          </ul>
          <ul className="pl-6 list-disc space-y-4 flex-1">
            <li className="text-placeholder text-main">
              Отправка:
              <ul className="list-item space-y-4 mt-4 text-gray-dark">
                <li>— до 17:00 — на следующий рабочий день</li>
                <li>— после 17:00 — через 1 рабочий день</li>
                <li>— после 17:00 в пятницу — отправка в понедельник</li>
              </ul>
            </li>
            <li className="text-placeholder text-gray-dark">
              Курьер связывается за час до визита
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-8">
        <TabTitle>4. Доставка по Казахстану (РК)</TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-main">
            Стандарт: от 2 700 ₸ (5–10 рабочих дней)
          </li>
          <li className="text-placeholder text-main">
            Экспресс: от 3 500 ₸ (до 3 рабочих дней)
          </li>
          <li className="text-placeholder text-gray-dark">
            Экспресс доставка возможна только в города(в посёлки и малые
            города — только стандарт)
          </li>
          <li className="text-placeholder text-gray-dark">
            Оплата: банковской картой на сайте
          </li>
        </ul>
      </div>
      <div className="space-y-8">
        <TabTitle>5. Доставка по СНГ и миру</TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-gray-dark">
            В Россию — через СДЭК
          </li>
          <li className="text-placeholder text-gray-dark">
            В другие страны — через DHL (стоимость рассчитывается индивидуально,
            уточняется менеджером)
          </li>
        </ul>
      </div>
      <div className="space-y-8">
        <TabTitle>6. Оплата доставки</TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-gray-dark">
            Оплата производится картой онлайн на сайте
          </li>
          <li className="text-placeholder text-gray-dark">
            При возврате/обмене — стоимость доставки удерживается, если товар
            не имеет брака
          </li>
        </ul>
      </div>
      <div className="space-y-8">
        <TabTitle titleClass="flex gap-2">
          <InfoBoldIcon />
          Примечание
        </TabTitle>
        <ul className="pl-6 list-disc space-y-4">
          <li className="text-placeholder text-gray-dark">
            Все условия действуют при наличии товара на складе
          </li>
          <li className="text-placeholder text-gray-dark">
            Менеджер связывается с вами после оформления заказа для уточнения
            способа доставки
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default DeliveryTab;
