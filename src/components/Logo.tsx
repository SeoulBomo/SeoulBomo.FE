import * as React from "react";

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={129}
      height={77}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path fill="url(#prefix__pattern0)" d="M.5 0h128v77H.5z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#prefix__image0_432_253"
            transform="matrix(.002 0 0 .00333 -.001 0)"
          />
        </pattern>
        <image
          id="prefix__image0_432_253"
          width={500}
          height={300}
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Logo;