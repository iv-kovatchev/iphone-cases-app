import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  className?: string;
}

const Phone = ({imgSrc, dark = false, className, ...props}: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}>
      <img src={
        dark
          ? '/images/phone-template-dark-edges.png'
          : '/images/phone-template-white-edges.png'
      }
           alt='phone-template'
           className='pointer-events-none z-50 select-none'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          className='object-cover'
          src={imgSrc}
          alt='overlaying-phone-image'
        />
      </div>
    </div>
  )
}

export default Phone;