import AddAddressDialog from "@/features/Addresses/components/Dialogs/AddAddressDialog";
import AddressCard from "@/features/Addresses/components/Cards/AddressCard";
import { useUser } from "@/shared/api/authApi";
import { Button } from "@/shared/components/UI/Button";
import { useMemo } from "react";

import { motion } from "motion/react";

const AddressesTab = () => {
  const { data } = useUser();

  const addresses = useMemo(
    () => data?.multiple_addresses ?? [],
    [data?.multiple_addresses]
  );

  return (
    <div className="flex flex-col w-full gap-8 md:gap-12">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 1 }}
        className="border border-gray-middle bg-gray-light py-4 px-5"
      >
        <h4 className="text-h5">Адресная книга</h4>
      </motion.div>
      {!addresses.length && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full flex justify-center items-center p-6 bg-main text-white"
        >
          В настоящее время нет адресов
        </motion.div>
      )}
      {addresses.map((address) => (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          key={address.id}
        >
          <AddressCard address={address} />
        </motion.div>
      ))}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col gap-8 lg:gap-4 border border-gray-middle px-4 py-6 md:px-6"
      >
        <h5 className="text-h5">Добавить новый адрес</h5>
        <div className="flex justify-end">
          <AddAddressDialog title="Новый адрес">
            <Button className="w-full lg:w-max">Добавить</Button>
          </AddAddressDialog>
        </div>
      </motion.div>
    </div>
  );
};

export default AddressesTab;
