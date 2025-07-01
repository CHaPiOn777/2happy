import { ProductMeta } from "@/features/Products/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { sanitizeHtml } from "@/shared/utils/sanitizeHtml";

const AccordionWithRichText = ({
  meta,
  title,
  value,
}: {
  title: string;
  value: string;
  meta: ProductMeta;
}) => {
  let rawHTML = meta.find((item) => item.key === value)?.value || "";

  rawHTML = rawHTML.replace(/(?:\r\n|\r|\n)/g, "<br />");

  const { safeHTML, parse } = sanitizeHtml(rawHTML);

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent className="text-gray-dark richtext-content">
        {safeHTML && parse(safeHTML)}
        {!safeHTML && (
          <p className="text-center">Вкладка не содержит контента</p>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionWithRichText;
