import type { FC, SVGProps } from 'react';

const PlusIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.6665 10.8334H4.6665V9.16675H9.6665V4.16675H11.3332V9.16675H16.3332V10.8334H11.3332V15.8334H9.6665V10.8334Z"
      fill="currentColor"
    />
  </svg>
);

export default PlusIcon;
