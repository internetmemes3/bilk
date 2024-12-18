export default function DesktopIcon({ icon, label, onClick, isActive }) {
  return (
    <div 
      onClick={onClick}
      className={`
        flex flex-col items-center w-12 p-1 cursor-pointer select-none
        ${isActive ? 'bg-[#000080] bg-opacity-30' : 'hover:bg-[#000080] hover:bg-opacity-20'}
      `}
    >
      <div className="w-30 h-30 flex items-center justify-center mb-0.5">
        <img 
          src={icon} 
          alt={label}
          className="w-full h-full object-contain"
          style={{ width: '70px', height: '70px' }}
          draggable="false"
        />
      </div>
      <span className="text-white text-center text-[10px] font-['MS_Sans_Serif'] break-words">
        {label}
      </span>
    </div>
  );
} 