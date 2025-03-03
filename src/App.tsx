import { VStack } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";

import BrandCta from "./components/ui/cta";
import AnalyticsTracker from "./components/ui/analyticsTracker";

function App() {
  return (
    <VStack
      minH={"100vh"}
      overflow={"auto"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <AnalyticsTracker/>
      <BrandCta />
      <Toaster />
    </VStack>
  );
}

export default App;
