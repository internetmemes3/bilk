import React from 'react';

const Window = ({ title, children, onClose, className }) => {
  return (
    <div 
      className={`
        bg-[#c0c0c0] 
        shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#dfdfdf,1px_1px_#000000]
        ${className}
      `}
    >
      <div className="bg-[#000080] px-2 py-[2px] flex items-center justify-between select-none">
        <div className="flex items-center gap-1">
          <span className="text-white font-['MS_Sans_Serif'] text-sm">{title}</span>
        </div>
        <button 
          onClick={onClose}
          className="w-[16px] h-[14px] bg-[#c0c0c0] flex items-center justify-center
            border-t border-l border-white
            border-r border-b border-[#000000]
            active:border-t active:border-l active:border-[#000000]
            active:border-r active:border-b active:border-white
            cursor-pointer"
        >
          <span className="transform -translate-y-[1px] text-sm">x</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="border border-[#808080] p-2">
        {children}
      </div>
    </div>
  );
}

export default Window;