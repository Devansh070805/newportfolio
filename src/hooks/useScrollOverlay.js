import { useEffect, useState } from "react";

const useScrollOverlay = (triggerId) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(triggerId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [triggerId]);

  return visible;
};

export default useScrollOverlay;
