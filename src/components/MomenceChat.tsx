import { useEffect } from "react";

const MomenceChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://momence.com/plugin/webchat/webchat.js";
    script.async = true;
    script.type = "module";
    script.setAttribute("host-id", "62930");
    script.setAttribute("token", "WZ8Ypl57Dd");
    script.setAttribute("position", "bottom-right");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default MomenceChat;
