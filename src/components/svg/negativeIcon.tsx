interface IconProps {
  className?: string
}

export const NegativeIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      className={`h-6 w-6 ${className}`}
    >
      <path
        fill="#ff5a79"
        d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10v40z"
      />
      <path
        fill="#fff"
        d="M50 21.2L42.8 14 32 24.8 21.2 14 14 21.2 24.8 32 14 42.8l7.2 7.2L32 39.2 42.8 50l7.2-7.2L39.2 32z"
      />
    </svg>
  )
}
