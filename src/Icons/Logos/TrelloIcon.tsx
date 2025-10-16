import type { FC, SVGProps } from 'react';

const TrelloIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.125 0H28.875C30.6063 0 32 1.39375 32 3.125V28.875C32 30.6063 30.6063 32 28.875 32H3.125C1.39375 32 0 30.6063 0 28.875V3.125C0 1.39375 1.39375 0 3.125 0Z"
      fill="url(#paint0_linear_10910_66)"
    />
    <path
      d="M19.58 4.16003H26.34C27.171 4.16003 27.84 4.82903 27.84 5.66003V16.66C27.84 17.491 27.171 18.16 26.34 18.16H19.58C18.749 18.16 18.08 17.491 18.08 16.66V5.66003C18.08 4.82903 18.749 4.16003 19.58 4.16003ZM5.66 4.16003H12.42C13.251 4.16003 13.92 4.82903 13.92 5.66003V24.66C13.92 25.491 13.251 26.16 12.42 26.16H5.66C4.829 26.16 4.16 25.491 4.16 24.66V5.66003C4.16 4.82903 4.829 4.16003 5.66 4.16003Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10910_66"
        x1="16"
        y1="0"
        x2="16"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2684FF" />
        <stop offset="1" stopColor="#0052CC" />
      </linearGradient>
    </defs>
  </svg>
);

export default TrelloIcon;
