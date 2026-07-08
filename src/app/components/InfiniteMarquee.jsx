export default function InfiniteMarquee() {
  const text = "Perfection Laboratory has been rated the #1 lash and brow salon in Toronto by the 2023 Top Choice awards.";

  return (
    <div className="mt-10 border-y border-dashed border-gray-400 py-3 overflow-hidden whitespace-nowrap">
      <div
        style={{
          display: 'inline-block',
          animation: 'marquee 30s linear infinite',
        }}
      >
        {Array(6).fill(`${text}          `).join('')}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}