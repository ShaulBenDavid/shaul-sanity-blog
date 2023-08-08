export const stepStyles = {
  smallSeparator: `flex items-center after:mx-2 after:text-gray-200 after:content-['/'] sm:after:hidden`,
  step: {
    completed: `text-primary-600 after:border-primary-200 `,
    notLast: `after:border-1 sm:w-full md:w-full after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] xl:after:mx-10`,
  },
};
