import type { FC, SVGProps } from 'react';

const ChevronUpIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="#181D27"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronUpIcon;
