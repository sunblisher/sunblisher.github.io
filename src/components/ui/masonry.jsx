import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "../../style/components/masonry.css";

const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex((q) => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach((q) => matchMedia(q).addEventListener("change", handler));
    return () =>
      queries.forEach((q) =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size];
};

const preloadImages = async (urls) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

const Masonry = ({ items, onSelect }) => {
  const columns = useMedia(
    [
      "(min-width:1500px)",
      "(min-width:1000px)",
      "(min-width:600px)",
      "(min-width:400px)",
    ],
    [4, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const height = child.height / 2;
      const y = colHeights[col];
      colHeights[col] += height;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  useLayoutEffect(() => {
    if (containerRef.current && grid.length) {
      const maxY = Math.max(...grid.map((i) => i.y + i.h));
      containerRef.current.style.height = `${maxY}px`;
    }
  }, [grid]);

  useEffect(() => {
    if (!imagesReady || !containerRef.current) return;

    gsap.set(containerRef.current, { opacity: 0, y: 60 });
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(containerRef.current, { opacity: 1, y: 0, duration: 1 });
      },
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [imagesReady]);

  return (
    <div ref={containerRef} className="list">
      {grid.map((item) => (
        <div
          key={item.id}
          className="item-wrapper"
          onClick={() => onSelect(item)} // ✅ 클릭 시 Home으로 전달
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            width: `${item.w}px`,
            height: `${item.h}px`,
          }}
        >
          <div
            className="item-img"
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Masonry;
