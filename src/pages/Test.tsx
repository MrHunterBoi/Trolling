import vitelogo from '/337712.jpg';

import { useEffect } from 'react';

function Test() {
  useEffect(() => {
    document.title = 'Lappland';
    window.location.href = 'calculator:';
  }, []);

  return <img src={vitelogo} className="image" alt="logo" />;
}

export default Test;
