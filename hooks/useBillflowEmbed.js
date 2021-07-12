import { useEffect } from "react";

const useBillflowEmbed = (props) => {
  const { settings, beta } = props;

  /**
   * clean up billflow scripts and styles from the dom
   */
  const cleanupBillflow = () => {
    const billflow_nodes = document.querySelectorAll(
      "script[billflow-script]"
    );
    if (billflow_nodes)
      for (let node of billflow_nodes) {
        node.remove();
      }
  };

  useEffect(() => {
    window.servicebotSettings = {
      ...settings
    };
    const liveURL = "https://js.billflow.io/billflow-embed.js"
    const betaURL = "https://js.billflow.io/beta/billflow-embed.js"
    const jsURL = beta ? betaURL : liveURL;
    (function () {
      var s = document.createElement("script");
      s.src = jsURL;
      s.async = true;
      s.type = "text/javascript";
      s.id = "servicebot-embed-js";
      s.setAttribute("billflow-script", "entry");
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    })();

    return () => {
      cleanupBillflow();
    };
  }, []);

  return { settings, cleanupBillflow };
};

export default useBillflowEmbed;
