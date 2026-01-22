import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

type Option<T extends string | number> = {
  value: T;
  label: string;
};

type SelectProps<T extends string | number> = {
  title: string;
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
};

export function Select<T extends string | number>({
  title,
  value,
  options,
  onChange,
}: SelectProps<T>) {
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <Listbox value={value} onChange={onChange}>
      <ListboxButton className="flex w-full cursor-pointer grid-cols-3 flex-col gap-0.5 rounded-xl px-4 py-2 transition-colors focus-within:bg-(--hover) hover:bg-(--hover)">
        <p className="text-start">{title}</p>

        <div className="h-full w-full rounded-md border-none bg-(--card-bg) p-2 outline-none placeholder:text-(--dim-fg) placeholder:opacity-80 focus:opacity-100">
          <span className="flex h-full items-center justify-start gap-1">
            {selectedLabel}
            <ChevronDown size={16} />
          </span>
        </div>
      </ListboxButton>

      <ListboxOptions
        anchor="bottom end"
        className="mt-1 min-w-50 rounded-xl bg-(--dialog-bg) p-1 shadow-sm focus:outline-none"
      >
        {options.map((option) => (
          <ListboxOption
            key={option.value}
            value={option.value}
            className="group flex cursor-pointer items-center rounded-lg px-3 py-2.5 data-focus:bg-(--hover)"
          >
            <span className="block truncate">{option.label}</span>

            <span className="ml-auto hidden group-data-selected:block">
              <Check size={16} />
            </span>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
