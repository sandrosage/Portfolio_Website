// Animated SVG background (inspired by repo 3)
export default function HeroBgAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20"
      >
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#854CE6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0d1117" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Animated circles */}
        <circle cx="400" cy="400" r="200" fill="url(#grad1)">
          <animate attributeName="r" values="200;240;200" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="400" r="300" fill="none" stroke="#854CE6" strokeWidth="0.5" opacity="0.3">
          <animate attributeName="r" values="300;340;300" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="400" r="380" fill="none" stroke="#854CE6" strokeWidth="0.3" opacity="0.15">
          <animate attributeName="r" values="380;420;380" dur="10s" repeatCount="indefinite" />
        </circle>

        {/* Floating dots */}
        {[
          { cx: 180, cy: 200, r: 3, dur: "4s" },
          { cx: 620, cy: 160, r: 2, dur: "5s" },
          { cx: 700, cy: 400, r: 4, dur: "6s" },
          { cx: 100, cy: 500, r: 2.5, dur: "7s" },
          { cx: 500, cy: 680, r: 3, dur: "5s" },
          { cx: 250, cy: 630, r: 2, dur: "4s" },
        ].map((dot, i) => (
          <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="#854CE6" opacity="0.6">
            <animate
              attributeName="opacity"
              values="0.6;0.1;0.6"
              dur={dot.dur}
              repeatCount="indefinite"
            />
          </circle>
        ))}

        {/* Grid lines */}
        <line x1="400" y1="0" x2="400" y2="800" stroke="#854CE6" strokeWidth="0.2" opacity="0.1" />
        <line x1="0" y1="400" x2="800" y2="400" stroke="#854CE6" strokeWidth="0.2" opacity="0.1" />
      </svg>
    </div>
  );
}
