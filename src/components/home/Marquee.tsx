const items = [
  "Creative Direction",
  "AI Marketing",
  "Web / LP",
  "Branding",
  "Video / MV",
  "VTuber",
  "EC Build",
  "Membership",
  "SNS",
  "AI Training",
];

export function Marquee() {
  // 途切れない流れを作るため2セット並べる
  const loop = [...items, ...items];
  return (
    <div className="border-y border-white/10 bg-[#0a0a0a] py-6 text-white">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 text-[clamp(1.1rem,2.4vw,1.9rem)] font-bold tracking-tight text-white/85">
              {it}
            </span>
            <span className="text-brand-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
