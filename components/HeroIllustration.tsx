export default function HeroIllustration({ maxSize = 460 }: { maxSize?: number }) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maxWidth: maxSize,
        aspectRatio: "1 / 1.1",
        background: "#ffffff",
        borderRadius: 32,
        boxShadow: "0 0 0 1px #f0ece1",
      }}
    >
      <svg
        viewBox="0 0 440 484"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <clipPath id="cardClip">
            <rect x="0" y="0" width="440" height="484" rx="32" />
          </clipPath>
        </defs>
        <g clipPath="url(#cardClip)">
          {/* Background sand disk */}
          <circle cx="360" cy="110" r="160" fill="#ece5d4" opacity="0.7" />
          {/* Face silhouette */}
          <path
            d="M 110 484 C 110 400 120 370 140 360 C 125 330 120 290 140 250 C 170 200 220 180 265 195 C 320 214 348 270 340 330 C 338 348 330 365 320 378 C 345 390 365 420 370 484 Z"
            fill="#f0ece1"
            stroke="#0a1f2e"
            strokeWidth="2"
          />
          {/* Hair */}
          <path
            d="M 140 250 C 130 200 165 150 220 148 C 285 146 340 190 345 255 C 346 273 342 290 336 300 C 322 275 290 258 258 260 C 225 262 200 282 192 300 C 170 290 152 276 140 250 Z"
            fill="#0a1f2e"
          />
          {/* Hand to cheek */}
          <path
            d="M 280 340 C 295 330 315 328 325 340 C 332 348 332 360 326 372 C 320 380 306 386 294 384 C 280 382 272 372 272 360 C 272 352 274 346 280 340 Z"
            fill="#f0ece1"
            stroke="#0a1f2e"
            strokeWidth="1.8"
          />
          <path
            d="M 300 332 L 308 318 M 310 336 L 320 326 M 318 344 L 332 338"
            stroke="#0a1f2e"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Brow + eye + smile */}
          <path
            d="M 205 260 Q 220 256 232 262"
            stroke="#0a1f2e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="218" cy="275" r="2.5" fill="#0a1f2e" />
          <path
            d="M 260 260 Q 275 256 288 262"
            stroke="#0a1f2e"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="274" cy="275" r="2.5" fill="#0a1f2e" />
          <path
            d="M 225 318 Q 246 326 270 316"
            stroke="#b29362"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Floating marks */}
          <circle cx="70" cy="80" r="4" fill="#b29362" />
          <path
            d="M 60 180 q 10 -6 20 0"
            stroke="#7f8487"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 380 400 q -10 10 -22 4"
            stroke="#7f8487"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
}
