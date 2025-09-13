import React from 'react'

interface itemProps {
    value: string;
    label: string;
}
const BigWidgets: React.FC<itemProps> = ({value, label}) => {
  return (
    <div className='rounded-2xl bg-surface-light border border-border flex flex-col text-start gap-2 p-4 transition-all duration-500 transform
    hover:border-accent-dark hover:-translate-y-1 relative group cursor-pointer'>
        <div className='text-4xl text-accent font-bold'>
            {value}
        </div>
        <div className='text-sm text-subtle'>
            {label}
        </div>
    </div>
  )
}

export default BigWidgets
