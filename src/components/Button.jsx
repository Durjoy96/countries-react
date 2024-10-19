export default function Button({ text, handler = () => {} }) {
  return (
    <button
      onClick={handler}
      className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold text-lg disabled:from-gray-300 disabled:to-gray-300"
    >
      {text}
    </button>
  );
}
