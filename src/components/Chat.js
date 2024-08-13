import React, { useEffect } from 'react';

export default function Chat() {
  useEffect(() => {
    console.log('Loading Tawk.to script');
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66bb41190cca4f8a7a755c3a/1i55ncjcb';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      console.log('Removing Tawk.to script');
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
