import { useEffect } from 'react';

export default function LoadImage() {
  function Scroll() {
    document.querySelectorAll('img').forEach((img, index) => {
      if (img.getBoundingClientRect().top < window.innerHeight) {
        if (index > 7) {
          // eslint-disable-next-line no-param-reassign
          img.src = img.getAttribute('data-src');
        }
      }
    });
  }

  useEffect(() => {
    Scroll();
    window.addEventListener('scroll', Scroll);
    window.addEventListener('load', Scroll);
  });
}
