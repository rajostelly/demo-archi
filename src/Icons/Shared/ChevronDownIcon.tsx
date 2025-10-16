import type { FC, SVGProps } from 'react';

const ChevronDownIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="#535862"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronDownIcon;
