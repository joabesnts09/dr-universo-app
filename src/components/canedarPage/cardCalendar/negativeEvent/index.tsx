import { NegativeIcon } from '@/components/svg/negativeIcon'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const NegativeEvent = () => {
  return (
    <>
      <div className='absolute top-2 right-2'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <NegativeIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p className=''>Este evento já ocorreu.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  )
}
