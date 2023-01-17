export const ExchangeIcon = ({ dark = false }: { dark?: boolean }): JSX.Element => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill={dark ? 'white' : '#A4251A'} />
    <path
      d="M16 13L18 15L16 17"
      stroke={dark ? '#A4251A' : 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 15H18"
      stroke={dark ? '#A4251A' : 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 11L6 9L8 7"
      stroke={dark ? '#A4251A' : 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 9H6"
      stroke={dark ? '#A4251A' : 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ExchangeIcon.displayName = 'ExchangeIcon';
