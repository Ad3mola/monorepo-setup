export const AngleRightIcon = ({ color }: { color?: string }): JSX.Element => {
  return (
    <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1.57391L7 7.57391L1 13.5739"
        stroke={color ? color : 'white'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
