"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** 表示までの遅延（ms） */
  delay?: number;
  /** 行マスク式（大見出し用） */
  mask?: boolean;
  /** dokomi風の弾むポップ表示（顔・作品など） */
  pop?: boolean;
  className?: string;
  as?: ElementType;
};

/**
 * sturdy.co 風のスクロール連動アニメーション。
 * 画面に入ったら一度だけフェード／スライドアップする。
 */
export function Reveal({
  children,
  delay = 0,
  mask = false,
  pop = false,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = mask ? "line-mask" : pop ? "reveal-pop" : "reveal";

  return (
    <Tag
      ref={ref}
      className={`${base} ${visible ? "is-visible" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {mask ? <span>{children}</span> : children}
    </Tag>
  );
}
