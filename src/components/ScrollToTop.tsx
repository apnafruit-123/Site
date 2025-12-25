import { useEffect } from 'react';

type ScrollToTopProps = {
  trigger: string;
};

const ScrollToTop = ({ trigger }: ScrollToTopProps) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // change to 'smooth' if you want
    });
  }, [trigger]);

  return null;
};

export default ScrollToTop;
