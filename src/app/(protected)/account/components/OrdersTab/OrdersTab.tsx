import OrdersList from "@/features/Orders/components/OrdersList/OrdersList";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/UI/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";

import * as motion from "motion/react-client";

const OrdersTab = () => {
  return (
    <div className="w-full">
      <Tabs className="w-full space-y-6" defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Мои заказы</TabsTrigger>
        </TabsList>
        <motion.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-body2 text-gray-middle"
        >
          Здесь вы можете отследить заказ, оформить возврат и просмотреть
          историю покупок
        </motion.p>
        <TabsContent value="orders">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <OrdersList />
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersTab;
