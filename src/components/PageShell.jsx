'use client';

import { useEffect, useState } from 'react';
import Loader from './Loader';

export default function PageShell({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // Optional: customize timing

    return () => clearTimeout(timeout);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}
