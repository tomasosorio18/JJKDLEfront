import { useEffect, useRef } from "react";

export const useScrollDown = (deps: any[] = []) => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, deps);
  return bottomRef;
}