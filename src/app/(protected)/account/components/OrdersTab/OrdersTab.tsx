import OrdersList from "@/features/Orders/components/OrdersList/OrdersList";
import Container from "@/shared/components/UI/Container";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/UI/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const OrdersTab = () => {
  return (
    <div className="w-full">
      <Tabs className="w-full space-y-6" defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Мои заказы</TabsTrigger>
        </TabsList>
        <p className="text-body2 text-gray-middle">
          Здесь вы можете отследить заказ, оформить возврат и просмотреть
          историю покупок
        </p>
        <TabsContent value="orders">
          <OrdersList />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersTab;
