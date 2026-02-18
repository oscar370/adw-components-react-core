import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

type ExpanderRowProps = {
  title: string;
  subtitle?: string | React.ReactNode;
  children: React.ReactNode;
};

export function ExpanderRow({ title, subtitle, children }: ExpanderRowProps) {
  return (
    <Disclosure>
      <li>
        <DisclosureButton className="group hover:bg-hover focus-visible:bg-hover flex min-h-13 w-full cursor-pointer items-center px-4 transition-colors focus:outline-none">
          <div className="flex min-w-0 flex-1 flex-col text-left">
            <span className="leading-tight">{title}</span>
            {subtitle && (
              <span className="text-dim-foreground mt-0.5 text-sm">
                {subtitle}
              </span>
            )}
          </div>

          <ChevronDown className="transition-transform duration-300 ease-out group-data-open:rotate-180" />
        </DisclosureButton>
      </li>

      <DisclosurePanel className="divide-border bg-expander-card-background divide-y">
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
}
