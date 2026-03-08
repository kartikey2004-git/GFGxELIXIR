import { useState, useEffect, useRef, useMemo } from "react";

export function Venue() {
  const [hov, setHov] = useState(false);
  const [typed, setTyped] = useState("");
  const full = "ABES Engineering College, Ghaziabad";
  const tRef = useRef(null);

  useEffect(() => {
    if (hov) {
      setTyped("");
      let i = 0;
      clearInterval(tRef.current);
      tRef.current = setInterval(() => {
        i++;
        setTyped(full.slice(0, i));
        if (i >= full.length) clearInterval(tRef.current);
      }, 38);
    } else {
      clearInterval(tRef.current);
      setTyped(full);
    }
    return () => clearInterval(tRef.current);
  }, [hov]);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative px-10 py-10 cursor-pointer bg-[#050505] rounded-lg border border-[rgba(0,200,180,0.05)] overflow-hidden  sm:w-150 md:w-180 transition-shadow duration-400">
        
      {/* Grid background */}
      <div
        className={`absolute inset-0 pointer-events-none z-0 
  bg-[linear-gradient(rgba(0,200,180,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,180,0.04)_1px,transparent_1px)]
  bg-size-[28px_28px]
  ${hov ? "animate-[holoPan_4s_linear_infinite]" : ""}`}
      ></div>

      {/* Corner brackets */}
{[
  ["top:0,left:0", "border-top-left"],
  ["top:0,right:0", "border-top-right"],
  ["bottom:0,left:0", "border-bottom-left"],
  ["bottom:0,right:0", "border-bottom-right"],
].map(([pos], i) => {
  const p = Object.fromEntries(pos.split(",").map((s) => s.split(":")));
  const borders = [
    "borderTop,borderLeft",
    "borderTop,borderRight",
    "borderBottom,borderLeft",
    "borderBottom,borderRight",
  ][i].split(",");

  return (
    <div
      key={i}
      style={{
        position: "absolute",
        ...p,
        width: 16,
        height: 16,
        ...Object.fromEntries(
          borders.map((b) => [b, "1.5px solid rgba(160,160,160,0.5)"])
        ),
        transition: "all .3s",
        zIndex: 6,
        // ...(hov
        //   ? { width: 22, height: 22, borderColor: "rgba(200,200,200,0.9)" }
        //   : {}),
        ...(hov
            ? {
                width: 22,
                height: 22,
                ...Object.fromEntries(
                    borders.map((b) => [b, "1.5px solid rgba(200,200,200,0.9)"])
                ),
            }
            : {}),
      }}
    />
  );
})}

      {/* Status dots */}
<div className="absolute top-3 right-5 flex gap-1.5 z-[6]">
  {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
    <div
      key={i}
      className={`w-[5px] h-[5px] rounded-full 
      shadow-[0_0_6px_var(--dot-color)]`}
      style={{
        background: c,
        "--dot-color": c,
      }}
    />
  ))}
</div>

      <div className="relative z-10">
        <div className="text-[0.70rem] tracking-[0.4em] mb-[14px] text-blue-300 font-['Orbitron',monospace]">
          SYS://LOCATION_DATA · UPLINK ACTIVE
        </div>

        <p className="m-0 font-['Orbitron',monospace] text-base leading-[2]">


          <span className="text-white text-[1.05rem] tracking-widest uppercase">
            Destination:{" "}
          </span>

          <span
            className="text-[1.05rem] text-blue-400 font-mono font-semibold tracking-[0.06em] transition-[filter] duration-[400ms]"
          >
            {typed}
          </span>
        </p>

      </div>
    </div>
  );
}
