import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

type Option<T extends string | number> = {
  value: T;
  label: string | React.ReactNode;
};

type SelectProps<T extends string | number> = {
  title?: string;
  value?: T;
  options: Option<T>[];
  placeholder?: string;
  onChange?: (value: T) => void;
};

export function Select<T extends string | number>({
  title,
  value,
  options,
  placeholder,
  onChange,
}: SelectProps<T>) {
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <Listbox value={value} onChange={onChange}>
      <ListboxButton className="flex w-full cursor-pointer flex-col gap-0.5">
        {title && <span className="text-start">{title}</span>}

        <div className="hover:bg-hover overflow-hidden rounded-md shadow-sm transition-colors">
          <div className="bg-card-background h-full w-full border-none p-2 outline-none">
            <span
              className={`flex h-full items-center justify-start gap-1 ${
                !selectedLabel && "text-dim-foreground opacity-80"
              }`}
            >
              {!selectedLabel ? placeholder : selectedLabel}
              <ChevronDown size={16} />
            </span>
          </div>
        </div>
      </ListboxButton>

      <ListboxOptions
        anchor="bottom start"
        className="bg-dialog-background mt-1 rounded-xl p-1 shadow-md focus:outline-none"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            className="group data-focus:bg-hover flex cursor-pointer items-center rounded-lg px-3 py-2.5"
          >
            <span className="block truncate">{option.label}</span>

            <span className="ml-1 hidden group-data-selected:block">
              <Check size={16} />
            </span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
