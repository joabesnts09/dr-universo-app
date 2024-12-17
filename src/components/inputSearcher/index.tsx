'use client'
import { useState } from 'react'

interface ISearchInputProps {
  placeholder?: string
  onSearch?: (value: string) => void
}

export const InputSearcher = ({
  placeholder = 'Buscar...',
  onSearch,
}: ISearchInputProps) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearch = () => {
    if (onSearch) onSearch(inputValue)
  }

  return (
    <>
      <div className='relative w-full max-w-md'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className='w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-hoverBgBtn'
        />
        <button
          onClick={handleSearch}
          className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-blue-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-4.35-4.35M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z'
            />
          </svg>
        </button>
      </div>
    </>
  )
}
