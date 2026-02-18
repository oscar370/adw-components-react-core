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
  subtitle?: string | React.ReactNode;
  icon?: React.ReactNode;
  accent?: string;
  value?: T;
  placeholder?: string;
  options: Option<T>[];
  onChange?: (value: T) => void;
};

export function SelectRow<T extends string | number>({
  title,
  subtitle,
  icon: Icon,
  accent,
  value,
  placeholder,
  options,
  onChange,
}: SelectRowProps<T>) {
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <li>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton className="hover:bg-hover focus-visible:bg-hover flex min-h-13 w-full cursor-pointer items-center px-4 text-left transition-colors focus:outline-none">
          {Icon && (
            <div
              aria-hidden="true"
              className={`mr-2 ${accent ? accent : "text-(--accent"}`}
            >
              {Icon}
            </div>
          )}

          <div className="min-w-0 flex-1">
            <span className="leading-tight">{title}</span>
            {subtitle && (
              <span className="text-dim-foreground mt-0.5 text-sm">
                {subtitle}
              </span>
            )}
          </div>

          <div
            className={`ml-4 flex items-center gap-1 ${!selectedLabel && "text-dim-foreground opacity-80"}`}
          >
            <span> {!selectedLabel ? placeholder : selectedLabel} </span>

            <ChevronDown size={16} />
          </div>
        </ListboxButton>

        <ListboxOptions
          anchor="bottom end"
          transition
          className="bg-dialog-background mt-1 min-w-50 origin-top rounded-xl p-1 shadow-sm transition ease-out focus:outline-none data-closed:scale-95 data-closed:opacity-0"
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
    </li>
  );
}
