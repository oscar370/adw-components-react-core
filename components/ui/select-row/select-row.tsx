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

type SelectRowProps<T extends string | number> = {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  value?: T;
  options: Option<T>[];
  onChange?: (value: T) => void;
};

export function SelectRow<T extends string | number>({
  title,
  subtitle,
  icon: Icon,
  value,
  options,
  onChange,
}: SelectRowProps<T>) {
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <li>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton className="flex min-h-13 w-full cursor-pointer items-center px-4 text-left transition-colors hover:bg-(--hover)">
          {Icon && (
            <div aria-hidden="true" className="mr-2 text-(--accent)">
              {Icon}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p className="leading-tight">{title}</p>
            {subtitle && (
              <p className="mt-0.5 text-sm text-(--dim-fg)">{subtitle}</p>
            )}
          </div>

          <div className="ml-4 flex items-center gap-1">
            <span>{selectedLabel}</span>

            <ChevronDown size={16} />
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
    </li>
  );
}
