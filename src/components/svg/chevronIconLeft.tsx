interface IChevronIconProps {
  className?: string;
}

export const ChevronIconLeft = ({className}: IChevronIconProps) => {

  return (
    <>
    <svg
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-6 h-6 ${className}`}
  >
    <path
      fill="currentColor"
      d="m34.52 239.03 194.35-194.34c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9l-154.03 154.74 154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0l-194.34-194.35c-9.37-9.37-9.37-24.57 0-33.94z"
    />
  </svg>
    </>
  )
}