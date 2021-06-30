import { useEffect } from "react";

const useBillflowEmbed = (props) => {
  const { settings } = props;

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
    (function () {
      var s = document.createElement("script");
      s.src = "https://js.billflow.io/billflow-embed.js";
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
