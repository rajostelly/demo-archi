import type { FC, SVGProps } from 'react';

const TaskListIcon: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.99999 6.0001H20M3.79999 5.8001L4.59999 6.6001L6.59999 4.6001M3.79999 11.8001L4.59999 12.6001L6.59999 10.6001M3.79999 17.8001L4.59999 18.6001L6.59999 16.6001M8.99999 12.0001H20M8.99999 18.0001H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TaskListIcon;
