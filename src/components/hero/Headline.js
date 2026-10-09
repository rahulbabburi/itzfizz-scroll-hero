// Renders text as one span per letter, each inside a clipping mask so it can
// rise into view. The hero uses it twice (the grey headline and the painted
// copy), so both always share exactly the same layout.
export default function Headline({ text, className = "", ...props }) {
  return (
    <span aria-hidden="true" className={`headline ${className}`} {...props}>
      {text.split(" ").map((word, w) => (
        <span key={w} className="headline-word">
          {Array.from(word, (char, i) => (
            <span key={i} className="headline-mask">
              <span className="headline-char" data-anim="char">
                {char}
              </span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
