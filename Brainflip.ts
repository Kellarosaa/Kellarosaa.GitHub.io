```typescript
import React, { useState } from "react";

const App = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      {showIframe && (
        <iframe
          src="https://bf-gen.vercel.app/"
          style={{
            border: "0px #ffffff none",
            width: "1100px",
            height: "740px",
            frameborder: "1",
            marginheight: "0px",
            marginwidth: "0px",
            allowfullscreen: true,
          }}
          name="myiFrame"
          scrolling="no"
        ></iframe>
      )}
    </div>
  );
};

export default App;
```
