import React from 'react'

interface itemProps {
    name: string;
}

const SmallWidgets: React.FC <itemProps> = ({name}) => {
  return (
    <div className='bg-surface rounded-2xl border border-border px-3 py-2 text-subtle text-sm
    transition-all transform duration-500 relative hover:border-accent-dark hover:-translate-y-1 cursor-default'>
      {name}
    </div>
  )
}

export default SmallWidgets
