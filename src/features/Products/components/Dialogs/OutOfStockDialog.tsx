import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { Button } from "@/shared/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { Input } from "@/shared/components/UI/Input";
import {
  RadioButtonsGroup,
  RadioGroupButton,
} from "@/shared/components/UI/RadioButtons";
import { Separator } from "@/shared/components/UI/Separator";
import Image from "next/image";
import { ReactNode } from "react";

const OutOfStockDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-[680px]">
        <DialogHeader>
          <DialogTitle className="text-h4">Узнать о поступлении</DialogTitle>
          <DialogDescription hidden>
            Подпишитесь на рассылку, чтобы узнать о поступлении товара
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-6">
          <div className="relative w-[185px] flex-shrink-0 h-[280px]">
            <Image
              fill
              src="/images/Home/Main/slider-1.jpg"
              alt="product-image"
            />
          </div>
          <div className="w-full space-y-4">
            <Accordion type="multiple" className="">
              <AccordionItem
                value="size"
                className="border border-main rounded-xs px-5"
              >
                <AccordionTrigger className="text-body2">
                  Выберите размер
                </AccordionTrigger>
                <AccordionContent>
                  <RadioButtonsGroup>
                    <RadioGroupButton value="S">S</RadioGroupButton>
                    <RadioGroupButton value="M">M</RadioGroupButton>
                    <RadioGroupButton value="L">L</RadioGroupButton>
                    <RadioGroupButton value="XL">XL</RadioGroupButton>
                  </RadioButtonsGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Input placeholder="Email" />
          </div>
        </div>
        <Separator />
        <DialogFooter>
          <Button size="large">Подписаться</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OutOfStockDialog;
