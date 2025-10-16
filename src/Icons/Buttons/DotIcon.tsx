import type { FC, SVGProps } from 'react';

const DotIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="5" cy="5" r="4" fill="white" />
  </svg>
);
export default DotIcon;
