const tones = {
  lime: "bg-card-lime text-ink",
  sky: "bg-card-sky text-ink",
  dark: "bg-card-dark text-white",
  orange: "bg-card-orange text-ink",
};

export default function StatCard({ value, label, tone }) {
  return (
    <li
      data-anim="stat"
      data-reveal
      className={`rounded-2xl p-4 md:p-6 [@media(max-height:560px)]:p-3 ${tones[tone]}`}
    >
      <p className="text-4xl leading-none font-semibold tracking-tight tabular-nums md:text-5xl">
        {/* The number sits in its own span so it can count up; 2ch keeps the width steady. */}
        <span data-anim="count" className="inline-block min-w-[2ch] text-right">
          {value}
        </span>
        %
      </p>
      <p className="mt-2 text-sm leading-snug md:mt-3 md:text-base">{label}</p>
    </li>
  );
}
