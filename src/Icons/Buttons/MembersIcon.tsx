import type { SVGProps } from 'react';

const MembersIcon = (
  props: SVGProps<SVGSVGElement>,
) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M15 7.5V10M15 10V12.5M15 10H17.5M15 10H12.5M10.8333 5.83333C10.8333 7.67428 9.34095 9.16667 7.5 9.16667C5.65905 9.16667 4.16667 7.67428 4.16667 5.83333C4.16667 3.99238 5.65905 2.5 7.5 2.5C9.34095 2.5 10.8333 3.99238 10.8333 5.83333ZM2.5 16.6667C2.5 13.9052 4.73858 11.6667 7.5 11.6667C10.2614 11.6667 12.5 13.9052 12.5 16.6667V17.5H2.5V16.6667Z" stroke="#1745B6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

export default MembersIcon;
