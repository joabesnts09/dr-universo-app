interface IconProps {
  className?: string
}
export const CalendarCheckIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`text-foreground h-5 w-5 max-w-5 ${className}`}
      height='24'
      width='24'
      viewBox='0 0 24 24'
      fill='currentColor' 
    >
      <path
        d='M20 8v-3h-2v1h-2v-1h-8v1h-2v-1h-2v3zm0 2h-16v10h16zm-2-7h2c1.1045695 0 2 .8954305 2 2v15c0 1.1045695-.8954305 2-2 2h-16c-1.1045695 0-2-.8954305-2-2v-15c0-1.1045695.8954305-2 2-2h2v-1h2v1h8v-1h2zm-7 12.5857864 4.2928932-4.2928932 1.4142136 1.4142136-5.7071068 5.7071068-3.70710678-3.7071068 1.41421356-1.4142136z'
        fillRule='evenodd'
      />
    </svg>
  )
}
