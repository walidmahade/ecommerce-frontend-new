import * as React from "react";

function Location(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="prefix__bi prefix__bi-geo-alt"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 018 14.58a31.481 31.481 0 01-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0110 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10z" />
      <path d="M8 8a2 2 0 110-4 2 2 0 010 4zm0 1a3 3 0 100-6 3 3 0 000 6z" />
    </svg>
  );
}

export default Location;