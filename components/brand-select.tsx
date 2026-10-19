'use client'

import { useState } from 'react'
import { Select } from '@base-ui/react/select'
import { Check, ChevronDown } from 'lucide-react'

export type BrandSelectOption = { label: string; value: string }

type BrandSelectProps = {
  label: string
  name: string
  placeholder: string
  options: BrandSelectOption[]
  defaultValue?: string
}

export default function BrandSelect({ label, name, placeholder, options, defaultValue }: BrandSelectProps) {
  const [open, setOpen] = useState(false)

  return (
    <Select.Root
      name={name}
      items={options}
      defaultValue={defaultValue}
      onOpenChange={setOpen}
    >
      <Select.Trigger
        aria-label={label}
        className="field flex min-h-[50px] cursor-pointer items-center justify-between gap-3 text-left"
      >
        <Select.Value className="truncate">
          {(value: string | null) =>
            value ? <span className="text-[#fff6e9]">{value}</span> : <span className="text-[#9d8a7b]">{placeholder}</span>
          }
        </Select.Value>
        <Select.Icon className="shrink-0 text-[#bda897]">
          <ChevronDown className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Positioner
          sideOffset={8}
          alignItemWithTrigger={false}
          className="z-[100] w-[var(--anchor-width)]"
        >
          <Select.Popup
            className="max-h-72 origin-[var(--transform-origin)] overflow-hidden rounded-2xl border border-orange-200/20 bg-[#1a100c]/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl transition-[opacity,transform] duration-150 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0"
          >
            <Select.List className="max-h-64 overflow-y-auto overscroll-contain">
              {options.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="flex cursor-pointer select-none items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-[#e6d5c6] outline-none transition-colors data-[highlighted]:bg-orange-300/12 data-[highlighted]:text-white data-[selected]:text-orange-200"
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                  <Select.ItemIndicator>
                    <Check className="size-4 text-orange-300" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.List>
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  )
}
