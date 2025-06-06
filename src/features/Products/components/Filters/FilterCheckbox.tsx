import { Checkbox, TCheckboxProps } from "@/shared/components/UI/Checkbox";

const FilterCheckbox = ({
  text,
  ...props
}: { text: string } & TCheckboxProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox id={text} className="w-6 h-6" {...props} />
      <label htmlFor={text} className="w-full">
        {text}
      </label>
    </div>
  );
};

export default FilterCheckbox;
