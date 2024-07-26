import { useEffect } from 'react'

const MemoryUsage = (interval = 10000) => {
  useEffect(() => {
    if (!performance.memory) {
      console.warn('Memory usage monitoring is not supported in this browser.');
      return;
    }

    const logMemoryUsage = () => {
      const memory = performance.memory;
      console.log(`JS Heap Size Limit: ${memory.jsHeapSizeLimit}`);
      console.log(`Total JS Heap Size: ${memory.totalJSHeapSize}`);
      console.log(`Used JS Heap Size: ${memory.usedJSHeapSize}`);
    };

    const intervalId = setInterval(logMemoryUsage, interval);

    return () => clearInterval(intervalId);
  }, [interval]);
};

export default MemoryUsage;
