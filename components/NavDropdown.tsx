'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from './Link'
import type { NavChildLink } from '@/data/headerNavLinks'

const NavDropdown = ({ title, items }: { title: string; items: NavChildLink[] }) => (
  <Popover className="relative">
    <PopoverButton className="hover:text-primary-500 dark:hover:text-primary-400 data-open:text-primary-500 m-1 flex cursor-pointer items-center gap-x-1 font-medium text-gray-900 focus:outline-none dark:text-gray-100">
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="h-4 w-4 shrink-0"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    </PopoverButton>
    <PopoverPanel
      anchor={{ to: 'bottom end', gap: 12 }}
      transition
      className="z-60 w-80 max-w-[calc(100vw-2rem)] rounded-md border border-gray-200 bg-white py-2 shadow-lg transition duration-150 ease-out data-closed:scale-95 data-closed:opacity-0 dark:border-gray-700 dark:bg-gray-950"
    >
      {items.map((item) => (
        <PopoverButton
          key={item.href}
          as={Link}
          href={item.href}
          className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <span className="block font-medium text-gray-900 dark:text-gray-100">{item.title}</span>
          {item.subtitle && (
            <span className="mt-0.5 block text-xs text-gray-500 dark:text-gray-400">
              {item.subtitle}
            </span>
          )}
        </PopoverButton>
      ))}
    </PopoverPanel>
  </Popover>
)

export default NavDropdown
