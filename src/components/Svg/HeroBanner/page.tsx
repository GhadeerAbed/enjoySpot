import React from "react";

export const HeroBanner = (props: any) => {
  return (
    <svg
      width="1240"
      height="393"
      viewBox="0 0 1240 393"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <mask
        id="mask0_175_2316"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="1240"
        height="393"
      >
        <rect width="1240" height="393" rx="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_175_2316)">
        <rect
          x="-12"
          y="-58"
          width="1252"
          height="509"
          fill="url(#pattern0_175_2316)"
        />
        <rect
          x="305"
          y="-58"
          width="1252"
          height="509"
          fill="url(#pattern1_175_2316)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_175_2316"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_175_2316"
            transform="matrix(0.000667569 0 0 0.00164204 -0.00067675 0)"
          />
        </pattern>
        <pattern
          id="pattern1_175_2316"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_175_2316"
            transform="matrix(0.000667569 0 0 0.00164204 -0.00067675 0)"
          />
        </pattern>
        <image
          id="image0_175_2316"
          width="1500"
          height="609"
        />
      </defs>
    </svg>
  );
};

export default HeroBanner;