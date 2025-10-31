export default function QuoteBox({ quote }) {
  return (
    <div className="relative mx-auto p-6 bg-white rounded-lg shadow-xl border-l-4 border-gray-500">
      <span className="absolute -top-2 -left-1 text-9xl text-gray-900 font-serif z-0 select-none">
        “
      </span>

      <blockquote className="relative z-10 text-xl p-2 italic text-gray-600 leading-relaxed">
        {quote}
      </blockquote>

      <span className="absolute -bottom-20 -right-1 text-9xl text-gray-900 font-serif z-0 select-none">
        ”
      </span>
    </div>
  );
}
