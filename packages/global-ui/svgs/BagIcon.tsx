export const BagIcon = ({
  className,
  size = '57'
}: {
  className?: string;
  size?: string;
}): JSX.Element => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 71 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M62.1853 97H8.81428C4.07341 97 0.345778 92.9276 0.762272 88.2061L5.68361 32.4311C6.05443 28.228 9.51592 25.0583 13.7356 25.0583H18.7269V16.7729C18.7269 7.52417 26.251 0 35.4998 0C44.7485 0 52.2727 7.52417 52.2727 16.7729V25.0583H57.264C58.1568 25.0583 58.8806 25.7822 58.8806 26.675C58.8806 27.5678 58.1568 28.2917 57.264 28.2917H52.2727V35.5667C52.2727 36.4595 51.5489 37.1833 50.656 37.1833C49.7632 37.1833 49.0394 36.4595 49.0394 35.5667V28.2917H27.8206C26.9278 28.2917 26.204 27.5678 26.204 26.675C26.204 25.7822 26.9278 25.0583 27.8206 25.0583H49.0394V16.7729C49.0394 9.30715 42.9656 3.23333 35.4998 3.23333C28.034 3.23333 21.9602 9.30715 21.9602 16.7729V35.5667C21.9602 36.4595 21.2363 37.1833 20.3435 37.1833C19.4507 37.1833 18.7269 36.4595 18.7269 35.5667V28.2917H13.7356C11.2039 28.2917 9.12691 30.1935 8.90441 32.7155L3.98308 88.4905C3.73229 91.3322 5.96491 93.7667 8.81428 93.7667H62.1853C65.0381 93.7667 67.2671 91.3287 67.0165 88.4905L62.0952 32.7155C62.0168 31.8261 62.6742 31.0414 63.5635 30.963C64.4525 30.8852 65.2376 31.542 65.316 32.4313L70.2373 88.2063C70.654 92.9288 66.9252 97 62.1853 97ZM26.204 83.0562H14.4831C13.5903 83.0562 12.8665 83.7801 12.8665 84.6729C12.8665 85.5657 13.5903 86.2896 14.4831 86.2896H26.204C27.0968 86.2896 27.8206 85.5657 27.8206 84.6729C27.8206 83.7801 27.0968 83.0562 26.204 83.0562ZM26.204 74.9729H14.4831C13.5903 74.9729 12.8665 75.6968 12.8665 76.5896C12.8665 77.4824 13.5903 78.2062 14.4831 78.2062H26.204C27.0968 78.2062 27.8206 77.4824 27.8206 76.5896C27.8206 75.6968 27.0968 74.9729 26.204 74.9729Z"
        fill="#3E4147"
      />
    </svg>
  );
};
