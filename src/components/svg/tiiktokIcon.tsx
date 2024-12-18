interface IconProps {
  className?: string
}
export const TiktokIcon = ({ className }: IconProps) => {
  return (
    <>
          <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_d)">
        <path
          d="M237 215C213.362 211.737 189.291 215.781 168.015 226.588C146.74 237.395 129.278 254.449 117.972 275.463C106.665 296.477 102.054 320.445 104.757 344.154C107.46 367.863 117.348 390.179 133.094 408.109C148.841 426.038 169.694 438.724 192.855 444.465C216.017 450.206 240.38 448.727 262.678 440.228C284.975 431.728 304.141 416.614 317.604 396.912C331.067 377.21 338.184 353.862 338 330V202C363.659 220.355 394.452 230.153 426 230V167C402.661 167 380.278 157.729 363.775 141.225C347.271 124.722 338 102.339 338 79H274V331C274.054 342.428 270.48 353.579 263.794 362.848C257.108 372.116 247.653 379.024 236.791 382.578C225.929 386.131 214.219 386.147 203.348 382.623C192.476 379.098 183.003 372.215 176.292 362.965C169.581 353.714 165.977 342.573 166.001 331.144C166.024 319.716 169.673 308.589 176.422 299.366C183.17 290.143 192.672 283.299 203.557 279.819C214.443 276.339 226.153 276.402 237 280"
          fill="#FF0055"
        />
      </g>
      <g style={{ mixBlendMode: "multiply" }} filter="url(#filter1_d)">
        <path
          d="M219 200C195.362 196.737 171.291 200.781 150.015 211.588C128.74 222.395 111.278 239.449 99.9715 260.463C88.6647 281.477 84.0535 305.445 86.7566 329.154C89.4596 352.863 99.3475 375.179 115.094 393.109C130.841 411.038 151.694 423.724 174.855 429.465C198.017 435.206 222.38 433.727 244.678 425.228C266.975 416.728 286.141 401.614 299.604 381.912C313.067 362.21 320.184 338.862 320 315V187C345.659 205.355 376.452 215.153 408 215V152C384.661 152 362.278 142.729 345.775 126.225C329.271 109.722 320 87.3391 320 64H256V316C256.054 327.428 252.48 338.579 245.794 347.848C239.108 357.116 229.653 364.024 218.791 367.578C207.929 371.131 196.219 371.147 185.348 367.623C174.476 364.098 165.003 357.215 158.292 347.965C151.581 338.714 147.977 327.573 148.001 316.144C148.024 304.716 151.673 293.589 158.422 284.366C165.17 275.143 174.672 268.299 185.557 264.819C196.443 261.339 208.153 261.402 219 265"
          fill="#00EEEE"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="100.004"
          y="79"
          width="329.996"
          height="376.901"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <filter
          id="filter1_d"
          x="82.0034"
          y="64"
          width="329.997"
          height="376.901"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
    </>
  )
}
