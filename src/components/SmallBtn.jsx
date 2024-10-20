const SmallBtn = ({ text, isActive, handler }) => {
  return (
    <button onClick={handler} className={`rounded-lg px-4 py-2 text-sm font-semibold ${isActive ? 'bg-gray-800 text-white/90 hover:bg-gray-800/80' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}>
      {text}
    </button>
  );
};

export default SmallBtn;
