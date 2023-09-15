import '../src/app/globals.css'; // Global styles
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag'; // For Google Analytics
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;