export const CalendarIcon = ({ color }: { color?: string }): JSX.Element => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.9993 3.30697H4.99935C3.1584 3.30697 1.66602 4.79935 1.66602 6.6403V14.9736C1.66602 16.8146 3.1584 18.307 4.99935 18.307H14.9993C16.8403 18.307 18.3327 16.8146 18.3327 14.9736V6.6403C18.3327 4.79935 16.8403 3.30697 14.9993 3.30697Z"
      stroke={color ? color : '#1F2937'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66602 8.30697H18.3327M6.66602 1.6403V4.97363V1.6403ZM13.3327 1.6403V4.97363V1.6403Z"
      stroke={color ? color : '#1F2937'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CalendarIcon.displayName = 'CalendarIcon';
