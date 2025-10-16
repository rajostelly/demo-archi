import type { FC, SVGProps } from 'react';

const UserAddIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5 7.5V10M15.5 10V12.5M15.5 10H18M15.5 10H13M11.3333 5.83333C11.3333 7.67428 9.84095 9.16667 8 9.16667C6.15905 9.16667 4.66667 7.67428 4.66667 5.83333C4.66667 3.99238 6.15905 2.5 8 2.5C9.84095 2.5 11.3333 3.99238 11.3333 5.83333ZM3 16.6667C3 13.9052 5.23858 11.6667 8 11.6667C10.7614 11.6667 13 13.9052 13 16.6667V17.5H3V16.6667Z"
      stroke="#111827"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserAddIcon;
