import { Input } from '@/components/ui/input'
import useUserProfile from '@/hooks/useUserProfile'
import { currencyFormatter } from '@/utils/currency-formatter'
import { BadgeCent } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'

interface PointPaymentProps {
  handleSelect: Dispatch<SetStateAction<boolean>>
  userPoint: number | undefined
}

const PointPayment: FC<PointPaymentProps> = ({ handleSelect, userPoint }) => {
  const onChange = () => {
    handleSelect(prev => !prev)
  }

  return (
    <div className='w-full flex flex-col border border-light rounded-[4px] p-3 gap-4 bg-primary-white'>
        <div className='w-full flex items-center gap-2'>
            <BadgeCent />
            <h1 className='text-xl font-general-sans font-medium'>Points</h1>
        </div>
        {
          userPoint === undefined || userPoint === null || userPoint === 0 ? (
            <h1>You don&apos;t have points</h1>
          ) : (
            <label htmlFor='point' className='w-full flex items-center gap-2'>
                <Input type='checkbox' className='w-4 h-4' onChange={onChange} />
                <h1 className='text-default'>
                  Use your <span className='font-bold text-primary-default'>{currencyFormatter(userPoint)}</span> points
                </h1>
            </label>
          )
        }
    </div>
  )
}

export default PointPayment