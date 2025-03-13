import { useEffect } from "react";

import { useLogger } from "@/hooks/useLogger";

const AnalyticsTracker = () => {
  const logger = useLogger();
  useEffect(() => {
    logger.logPageView(window.location.pathname);
  }, []);
  return null;
};

export default AnalyticsTracker;
