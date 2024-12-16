interface IconProps {
  className?: string
}
export const PanelLeftIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`icon icon-tabler icon-tabler-layout-sidebar-left-expand text-foreground ${className}`}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <rect x='4' y='4' width='16' height='16' rx='2' />
      <path d='M9 4v16' />
      <path d='M14 10l2 2l-2 2' />
    </svg>
  )
}
