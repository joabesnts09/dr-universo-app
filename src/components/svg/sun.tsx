interface IconProps {
  className?: string
}
export const SunIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`w-5 h-5 max-w-5 text-yellow-700 ${className}`}
      viewBox='0 0 24 24'
      fill='currentColor'
    >
      <path
        d='m0 0h24v24h-24z'
        opacity='0'
        transform='matrix(-1 0 0 -1 24 24)'
      />
      <g >
        <path d='m12 6a1 1 0 0 0 1-1v-2a1 1 0 0 0 -2 0v2a1 1 0 0 0 1 1z' />
        <path d='m21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z' />
        <path d='m6 12a1 1 0 0 0 -1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z' />
        <path d='m6.22 5a1 1 0 0 0 -1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z' />
        <path d='m17 8.14a1 1 0 0 0 .69-.28l1.44-1.39a1 1 0 0 0 -1.35-1.47l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z' />
        <path d='m12 18a1 1 0 0 0 -1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0 -1-1z' />
        <path d='m17.73 16.14a1 1 0 0 0 -1.39 1.44l1.44 1.42a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z' />
        <path d='m6.27 16.14-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0 -1.39-1.44z' />
        <path d='m12 8a4 4 0 1 0 4 4 4 4 0 0 0 -4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z' />
      </g>
    </svg>
  )
}
