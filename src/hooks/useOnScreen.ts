import { RefObject, useEffect, useRef, useState } from "react";

const useOnScreen = (ref: RefObject<HTMLElement>, checkFirstTime = false) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [ isOnScreen, setIsOnScreen ] = useState<boolean>(false);
  const [ isOnScreenByFirstTime, setIsOnScreenByFirstTime ] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsOnScreenByFirstTime(true);
      setIsOnScreen(entry.isIntersecting);
    });
  }, []);

  useEffect(() => {
    observerRef.current?.observe(ref.current!);

    return () => {
      observerRef.current?.disconnect();
    }
  }, [ref]);

  return checkFirstTime ? isOnScreenByFirstTime : isOnScreen;
}

export default useOnScreen;