import { useEffect } from 'react';

const Tester = () => {
  useEffect(() => {
    const handleEvent = (e) => {
      const { keyCode } = e;
      console.log({ keyCode });
    };
    document.addEventListener('keydown', handleEvent);
    return () => document.removeEventListener('keydown', handleEvent);
  }, []);

  return <div>Tester</div>;
};
export default Tester;
