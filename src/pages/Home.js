import { useLayoutEffect } from 'react';

export default function Home({ setShowNavbar }) {
  console.log('Home');

  // Receive setShowNavbar as props and set it to true
  useLayoutEffect(() => {
    setShowNavbar(true);
  }, []);

  return <div>Home</div>;
}
