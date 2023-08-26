import { useNavigate } from 'react-router';
import { BiX } from 'react-icons/bi';
import { useLayoutEffect } from 'react';
export default function BlackWhite({ setShowNavbar }) {
  const rightAlign = {
    textAlign: 'right',
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  // Receive setShowNavbar as props and set it to false
  useLayoutEffect(() => {
    setShowNavbar(false);
  }, []);

  return (
    <div style={rightAlign} className="BlackWhite">
      <h1>Black and white</h1>
      {/* <button onClick={handleClick}>Back to homepage</button> */}
      <BiX className="icon" onClick={handleClick} />
    </div>
  );
}
