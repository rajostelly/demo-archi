import type { FC, SVGProps } from 'react';

const CircleIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_10822_3587)">
      <path
        d="M9.99935 18.3334C14.6017 18.3334 18.3327 14.6024 18.3327 10C18.3327 5.39765 14.6017 1.66669 9.99935 1.66669C5.39698 1.66669 1.66602 5.39765 1.66602 10C1.66602 14.6024 5.39698 18.3334 9.99935 18.3334Z"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_10822_3587">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CircleIcon;
