"use client";

import * as React from "react";
import { format } from "date-fns";

import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { Calendar, CalendarProps } from "./Calendar";

const DatePickerInput = ({
  value,
  onSelect,
  disabled,
  placeholder,
  title,
  endIcon,
  ...props
}: CalendarProps & {
  value: Date | undefined;
  onSelect: (value: Date | undefined) => void;
  disabled?: boolean;
  placeholder?: string;
  endIcon?: React.ReactNode;
  title?: string;
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex items-center py-2 px-5 justify-center items-start rounded-xs w-full border border-main h-[56px]">
          <button
            className="flex w-full flex-col justify-center items-start "
            type="button"
          >
            <span className="text-title text-gray-middle">{title}</span>
            {value ? (
              format(value, "dd/MM/yy")
            ) : (
              <span className="text-gray">{placeholder}</span>
            )}
          </button>
          {endIcon}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          {...props}
          mode="single"
          selected={value}
          onSelect={onSelect}
          disabled={disabled}
          captionLayout="dropdown"
          startMonth={new Date(1900, 11)}
          endMonth={new Date(2014, 11)}
          autoFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePickerInput;
