import CheckIcon from "@/shared/components/icons/CheckIcon";
import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import InstagramBoldIcon from "@/shared/components/icons/Social/InstagramBoldIcon";
import WhatsAppBoldIcon from "@/shared/components/icons/Social/WhatsAppBoldIcon";
import Container from "@/shared/components/UI/Container";
import TabTitle from "@/shared/components/UI/TabTitle";

const RefundsTab = () => {
  return (
    <Container className="flex-col gap-12 sm:gap-16">
      <div className="space-y-8">
        <h2 className="text-h2">Условия возврата и обмена /</h2>
        <p className="text-body2">
          Мы ценим наших клиентов и хотим, чтобы вы были полностью довольны
          покупкой. Если вещь не подошла по размеру, фасону или по другим
          причинам, вы можете оформить возврат или обмен в течение
          14 календарных дней с момента получения заказа.
        </p>
      </div>
      <div className="space-y-8">
        <TabTitle>Возврат</TabTitle>
        <div className="space-y-6">
          <p className="text-body2">
            Возврат возможен при соблюдении следующих условий:
          </p>
          <ul className="flex flex-col gap-4 text-placeholder text-gray-dark">
            <li className="flex gap-2">
              <div className="w-6 h-6 bg-black">
                <CheckIcon className="fill-white" />
              </div>
              Товар не был в носке и не имеет следов использования
            </li>
            <li className="flex gap-2">
              <div className="w-6 h-6 bg-black">
                <CheckIcon className="fill-white" />
              </div>
              Сохранены оригинальные бирки, ярлыки и упаковка
            </li>
            <li className="flex gap-2">
              <div className="w-6 h-6 bg-black">
                <CheckIcon className="fill-white" />
              </div>
              Товар не входит в перечень изделий, не подлежащих возврату (нижнее
              белье, купальники, <br /> чулочно-носочные изделия — согласно
              Закону РК «О защите прав потребителей»)
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-8">
        <TabTitle>Обмен</TabTitle>
        <p className="text-body2">
          Вы можете обменять товар на другой размер, цвет или модель при наличии
          на складе. Если нужного варианта нет — мы оформим возврат денежных
          средств.
        </p>
      </div>
      <div className="space-y-8">
        <TabTitle>Как оформить возврат или обмен</TabTitle>
        <ul className="flex flex-col gap-4 text-placeholder text-gray-dark">
          <li className="flex gap-2">
            <div className="flex items-center justify-center w-6 h-6 shrink-0 bg-black text-white text-description">
              1
            </div>
            Напишите нам в Direct Instagram или WhatsApp:
          </li>
          <li className="flex flex-col gap-2 ml-9 text-body2">
            <a href="" className="inline-flex items-center gap-1 link-hover">
              <InstagramBoldIcon className="!size-6 " />
              <span>2happy</span>
            </a>
            <a
              target="_blank"
              href="https://wa.me/77021657378"
              className="inline-flex items-center gap-2 link-hover"
            >
              <WhatsAppBoldIcon className="!size-5 " />
              <span>+7 (702) 165–73–78</span>
            </a>
          </li>
          <li className="flex gap-2">
            <div className="flex items-center justify-center w-6 h-6 shrink-0 bg-black text-white text-description">
              2
            </div>
            Укажите номер заказа, причину возврата и приложите фото (если есть)
          </li>
          <li className="flex gap-2">
            <div className="flex items-center justify-center w-6 h-6 shrink-0 bg-black text-white text-description">
              3
            </div>
            Приносим свои извинения, но Казпочтой мы не сможем принять
            ваш товар. Просим вас отправить его любой курьерской службой
            с доставкой для магазина
          </li>
          <li className="flex gap-2">
            <div className="flex items-center justify-center w-6 h-6 shrink-0 bg-black text-white text-description">
              4
            </div>
            После получения и проверки товара, мы вернём деньги в течение
            3–5 рабочих дней тем же способом, которым вы оплатили заказ
          </li>
        </ul>
      </div>
      <div className="flex gap-2.5 bg-gray-light border border-main rounded-xs px-4 sm:px-6 py-4">
        <InfoBoldIcon className="shrink-0" />
        <div className="flex flex-col gap-1.5">
          <h5 className="text-h5">Важно!</h5>
          <p>
            Расходы по доставке при возврате или обмене оплачиваются
            покупателем, если товар не имеет производственного брака.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default RefundsTab;
