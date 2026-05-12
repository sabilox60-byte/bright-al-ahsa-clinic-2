"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background video — Apple/Vercel/Stripe pattern.
 *
 * After 5 failed approaches with <video> in initial HTML (React property
 * vs HTML attribute issues, multi-source codec confusion, hydration
 * interference, art-direction with two videos), pivoting to what every
 * premium production site actually does:
 *
 *   - DO NOT render <video> in initial HTML at all.
 *   - On mount (after hydration is done), create the <video> element via
 *     document.createElement, set every attribute + property BEFORE
 *     inserting it into the DOM, then appendChild + .play().
 *
 * Why this works on iOS Safari:
 *   - No parse-time autoplay decision (no <video> at parse).
 *   - JS-created video is born with autoplay+muted+playsinline as
 *     attributes AND properties — Safari has nothing to second-guess.
 *   - No Next.js hydration race — element exists only after hydration.
 *   - Single video per device (matchMedia picks src) — no display:none
 *     games, no double-download, no decoder confusion.
 *
 * Initial paint:
 *   - Container has poster image as CSS background (instant LCP).
 *   - Video appended on top when ready — covers poster seamlessly.
 */
export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const src = isMobile ? "/hero/bright-hero-mobile.mp4" : "/hero/bright-hero-h264.mp4";
    const poster = isMobile ? "/hero/bright-hero-mobile-poster.jpg" : "/hero/bright-hero-poster.jpg";
    const objectPosition = isMobile ? "center center" : "center right";

    // Build the video element completely BEFORE inserting into DOM.
    const v = document.createElement("video");

    // 1) Properties
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.loop = true;
    v.autoplay = true;
    v.preload = "auto";
    v.poster = poster;

    // 2) Parse-time attributes (some Safari edge cases only check these)
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "true");
    v.setAttribute("x-webkit-airplay", "deny");
    v.setAttribute("autoplay", "");
    v.setAttribute("loop", "");
    v.setAttribute("preload", "auto");
    v.setAttribute("aria-hidden", "true");
    v.setAttribute("disablepictureinpicture", "");
    v.setAttribute("disableremoteplayback", "");

    v.className = "hero-video";
    Object.assign(v.style, {
      position: "absolute",
      inset: "0",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition,
      zIndex: "0",
    });

    // Set src LAST — only now does the browser start loading the video.
    v.src = src;

    // Insert into DOM
    container.appendChild(v);

    // Play strategy: try immediately + retry + event-hook + gesture fallback
    let cancelled = false;
    const tryPlay = () => {
      if (cancelled || !v.paused) return;
      const p = v.play();
      if (p !== undefined) p.catch(() => {});
    };

    tryPlay();
    const retryTimer = setInterval(tryPlay, 250);
    const stopRetry = setTimeout(() => clearInterval(retryTimer), 5000);

    const events = ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"];
    events.forEach((e) => v.addEventListener(e, tryPlay));

    const onGesture = () => {
      tryPlay();
      ["touchstart", "click", "scroll"].forEach((e) =>
        document.removeEventListener(e, onGesture)
      );
    };
    document.addEventListener("touchstart", onGesture, { passive: true });
    document.addEventListener("click", onGesture);
    document.addEventListener("scroll", onGesture, { passive: true });

    return () => {
      cancelled = true;
      clearInterval(retryTimer);
      clearTimeout(stopRetry);
      events.forEach((e) => v.removeEventListener(e, tryPlay));
      ["touchstart", "click", "scroll"].forEach((e) =>
        document.removeEventListener(e, onGesture)
      );
      v.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="hero-video-stage"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        background: "#0a1f2e",
      }}
    />
  );
}
