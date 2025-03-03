import { useEffect } from "react";

import { logEvent } from "firebase/analytics";
import { analytics } from "@/configs/firebase";

const AnalyticsTracker = () => {
  useEffect(() => {
    logEvent(analytics, "page_view", {
      page_path: window.location.pathname,
      page_title: document.title,
    });
    console.log("page_view logged");
  }, [analytics, window.location.pathname]);

  return null;
};

export default AnalyticsTracker;
