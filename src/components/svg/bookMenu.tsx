interface IconProps {
  className?: string
}
export const BookMenuIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`text-foreground h-5 w-5 max-w-5 ${className}`}
      viewBox='0 0 24 24'
      fill='none'
    >
      <g fill='currentColor'>
        <path d='M19,3.25H6.75A2.43,2.43,0,0,0,4.25,5.6V18a2.85,2.85,0,0,0,2.94,2.75H19a.76.76,0,0,0,.75-.75V4A.76.76,0,0,0,19,3.25Zm-.75,16H7.19A1.35,1.35,0,0,1,5.75,18a1.35,1.35,0,0,1,1.44-1.25H18.25Zm0-4H7.19a3,3,0,0,0-1.44.37V5.6a.94.94,0,0,1,1-.85h11.5Z' />
        <path d='M8.75,8.75h6.5a.75.75,0,0,0,0-1.5H8.75a.75.75,0,0,0,0,1.5Z' />
        <path d='M8.75,12.25h6.5a.75.75,0,0,0,0-1.5H8.75a.75.75,0,0,0,0,1.5Z' />
      </g>
    </svg>
  )
}
