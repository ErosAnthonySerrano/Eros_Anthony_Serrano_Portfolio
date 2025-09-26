import React from 'react'

interface itemProps {
    name: string;
}

const SmallWidgets: React.FC <itemProps> = ({name}) => {
  return (
    <div className='bg-surface rounded-lg border border-border px-3 py-1 text-subtle text-sm
    transition-all transform duration-500 relative hover:border-accent-dark hover:-translate-y-1 cursor-default shadow-lg shadow-black/30 text-shadow-lg text-shadow-black/50'>
      {name}
    </div>
  )
}

export default SmallWidgets
