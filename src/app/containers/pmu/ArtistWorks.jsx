import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const works = [
  {
    name: "Name here",
    year: "2026",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    name: "Name here",
    year: "2025",
    bio: "It has survived not only five centuries, but also the leap into electronic typesetting. It was popularised in the 1960s with the release of Letraset sheets.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
  },
  {
    name: "Name here",
    year: "2024",
    bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over two millennia old.",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  },
   {
    name: "Name here",
    year: "2024",
    bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over two millennia old.",
    img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
  },
];

const ANIM_DURATION = 650;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function ArtistWorks() {
  const [current, setCurrent] = useState(0);
  const [clones, setClones] = useState(null);
  const [hideBig, setHideBig] = useState(false);

  const outerRef       = useRef(null);
  const panelRef       = useRef(null);
  const bigRef         = useRef(null);
  const topLeftRef     = useRef(null);
  const bottomRightRef = useRef(null);
  const currentRef     = useRef(0);
  const busyRef        = useRef(false);

  const isMobile = useIsMobile();
  const total = works.length;

  useEffect(() => { currentRef.current = current; }, [current]);

  useEffect(() => {
    const id = setTimeout(() => { busyRef.current = false; }, ANIM_DURATION + 100);
    return () => clearTimeout(id);
  }, [current]);

  const triggerTransition = useCallback((nextIdx, direction) => {
    if (busyRef.current) return;
    busyRef.current = true;

    const bigRect   = bigRef.current?.getBoundingClientRect();
    const tlRect    = topLeftRef.current?.getBoundingClientRect();
    const brRect    = bottomRightRef.current?.getBoundingClientRect();
    const panelRect = panelRef.current?.getBoundingClientRect() ?? { left: 0, top: 0 };

    if (!bigRect || !tlRect || !brRect || bigRect.width === 0 || tlRect.width === 0 || brRect.width === 0) {
      setCurrent(nextIdx);
      busyRef.current = false;
      return;
    }

    const rel = (r) => ({
      left: r.left - panelRect.left,
      top:  r.top  - panelRect.top,
      w: r.width,
      h: r.height,
    });

    setClones({
      direction,
      prevIdx: currentRef.current,
      nextIdx,
      A_from: rel(bigRect),
      A_to:   direction === "forward" ? rel(tlRect) : rel(brRect),
      B_from: direction === "forward" ? rel(brRect) : rel(tlRect),
      B_to:   rel(bigRect),
    });

    requestAnimationFrame(() => setHideBig(true));

    setTimeout(() => {
      setCurrent(nextIdx);
      setClones(null);
      setHideBig(false);
      busyRef.current = false;
    }, ANIM_DURATION);
  }, []);

  useEffect(() => {
    function onScroll() {
      const outer = outerRef.current;
      if (!outer) return;
      const { top } = outer.getBoundingClientRect();
      const scrolled = -top;
      if (scrolled < 0 || scrolled > outer.offsetHeight) return;
      const targetIdx = Math.min(Math.max(Math.round(scrolled / window.innerHeight), 0), total - 1);
      if (targetIdx === currentRef.current || busyRef.current) return;
      triggerTransition(targetIdx, targetIdx > currentRef.current ? "forward" : "backward");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [total, triggerTransition]);

  const cur  = works[current];
  const prev = works[current - 1] ?? null;
  const nxt  = works[current + 1] ?? null;

  return (
    <div ref={outerRef} style={{ position: "relative", height: isMobile ? "100svh" : "400vh" }}>
      <div
        ref={panelRef}
        style={{
          position: isMobile ? "relative" : "sticky",
          top: 0,
          width: "100%",
          height: isMobile ? "100svh" : "100vh",
          overflow: "hidden",
          background: "#f9f8f5",
          userSelect: "none",
        }}
      >
        {/* Top-left thumbnail */}
        <div
          ref={topLeftRef}
          style={{
            position: "absolute",
            left:   isMobile ? "5%"   : "13%",
            top:    isMobile ? "auto" : "13%",
            bottom: isMobile ? "14%"  : "auto",
            width:  isMobile ? 64     : 110,
            height: isMobile ? 76     : 130,
            overflow: "hidden",
            zIndex: 3,
          }}
        >
          {prev ? (
            <img
              src={prev.img} alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)", opacity: clones ? 0 : 1, transition: "opacity 0.1s" }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", border: "1px dashed #ccc" }} />
          )}
        </div>

        {/* Big image */}
        <div
          ref={bigRef}
          style={{
            position: "absolute",
            left:      isMobile ? "50%"  : "26%",
            top:       isMobile ? "5%"   : "8%",
            transform: isMobile ? "translateX(-50%)" : "none",
            width:     isMobile ? "88%"  : "30%",
            height:    isMobile ? "50%"  : "82%",
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          <img
            src={cur.img} alt={cur.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: hideBig ? 0 : 1 }}
          />
          <div style={{ position: "absolute", bottom: 8, left: 6, fontFamily: "Arial, sans-serif", fontSize: isMobile ? 10 : 12, color: "#1a1a1a", zIndex: 5 }}>
            {cur.year}
          </div>
        </div>

        {/* Name + bio */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={{
              position: "absolute",
              left:      isMobile ? "50%" : "59%",
              top:       isMobile ? "59%" : "12%",
              transform: isMobile ? "translateX(-50%)" : "none",
              width:     isMobile ? "80%" : "28%",
              textAlign: isMobile ? "center" : "left",
              zIndex: 4,
            }}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: isMobile ? 20 : 34, fontWeight: 400, color: "#1a1a1a", margin: "0 0 10px 0", lineHeight: 1.2 }}>
              {cur.name}
            </h2>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: isMobile ? 10.5 : 12.5, lineHeight: 1.7, color: "#1a1a1a", margin: 0 }}>
              {cur.bio}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Bottom-right thumbnail */}
        <div
          ref={bottomRightRef}
          style={{
            position: "absolute",
            right:  isMobile ? "5%"  : "10%",
            bottom: isMobile ? "14%" : "13%",
            width:  isMobile ? 64    : 110,
            height: isMobile ? 76    : 130,
            overflow: "hidden",
            zIndex: 3,
          }}
        >
          {nxt ? (
            <img
              src={nxt.img} alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%)", opacity: clones ? 0 : 1, transition: "opacity 0.1s" }}
            />
          ) : (
            <div style={{ width: "100%", height: "100%", border: "1px dashed #ccc" }} />
          )}
        </div>

        {/* Progress dots */}
        <div style={{ position: "absolute", bottom: isMobile ? 86 : 24, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: 6 }}>
          {works.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 99,
                background: i === current ? "#1a1a1a" : i < current ? "#888" : "#ccc",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>

        {/* Arrow buttons — mobile only */}
        {isMobile && (
          <div style={{ display: "flex", position: "absolute", bottom: 24, left: 0, right: 0, justifyContent: "center", alignItems: "center", gap: 28, zIndex: 30 }}>
            <button
              onClick={() => { if (current > 0) triggerTransition(current - 1, "backward"); }}
              aria-label="Previous"
              style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "#1a1a1a", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: current > 0 ? 1 : 0.2,
                transition: "opacity 0.2s",
                cursor: current > 0 ? "pointer" : "default",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f9f8f5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => { if (current < total - 1) triggerTransition(current + 1, "forward"); }}
              aria-label="Next"
              style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "#1a1a1a", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: current < total - 1 ? 1 : 0.2,
                transition: "opacity 0.2s",
                cursor: current < total - 1 ? "pointer" : "default",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f9f8f5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}

        {/* Scroll hint — desktop only */}
        {!isMobile && (
          <motion.div
            style={{ position: "absolute", bottom: 24, right: 40, zIndex: 10, fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999", letterSpacing: "0.08em" }}
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            {current < total - 1 ? "scroll ↓" : "continue ↓"}
          </motion.div>
        )}

        {/* FLIP clones — absolute, clipped by panel's overflow:hidden */}
        {clones && (
          <>
            <motion.div
              style={{ position: "absolute", overflow: "hidden", zIndex: 50, pointerEvents: "none" }}
              initial={{ left: clones.A_from.left, top: clones.A_from.top, width: clones.A_from.w, height: clones.A_from.h }}
              animate={{ left: clones.A_to.left,   top: clones.A_to.top,   width: clones.A_to.w,   height: clones.A_to.h }}
              transition={{ duration: ANIM_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
            >
              <img src={works[clones.prevIdx].img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: clones.direction === "forward" ? "grayscale(100%)" : "grayscale(0%)" }} />
            </motion.div>

            <motion.div
              style={{ position: "absolute", overflow: "hidden", zIndex: 49, pointerEvents: "none" }}
              initial={{ left: clones.B_from.left, top: clones.B_from.top, width: clones.B_from.w, height: clones.B_from.h }}
              animate={{ left: clones.B_to.left,   top: clones.B_to.top,   width: clones.B_to.w,   height: clones.B_to.h }}
              transition={{ duration: ANIM_DURATION / 1000, ease: [0.76, 0, 0.24, 1] }}
            >
              <img src={works[clones.nextIdx].img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}