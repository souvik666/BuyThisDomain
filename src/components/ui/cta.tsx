import {
  Box,
  Heading,
  Text,
  Avatar,
  VStack,
  chakra,
  Spinner,
  HStack,
} from "@chakra-ui/react";

import { Tooltip } from "@/components/ui/tooltip";

import useAnimeImage from "@/hooks/useAnime";
import ContactForm from "./contactForm";
import { useLogger } from "@/hooks/useLogger";
import { useEffect, useState } from "react";

function BrandCta() {
  const { loading, animeImage } = useAnimeImage();
  const logger = useLogger();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    logger.logPageView(window.location.pathname);
  }, [logger]);

  return (
    <HStack
      pos={"relative"}
      bg="gray.900"
      gap={7}
      flexWrap={"wrap"}
      h={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack
        textAlign="center"
        p={6}
        gap={3}
        mt={{
          base: "32",
          lg: "0",
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <Tooltip
            content="We are asking for $10,000, and the price is negotiable. Let's connect if you're interested!"
            open={!!animeImage}
            showArrow
            positioning={{ placement: "top" }}
            contentProps={{ padding: 4, fontSize: "md" }}
          >
            <Box
              onMouseEnter={() => {
                if (!hovered) {
                  logger.logCustomEvent("avatar_hover", { item: "anime_image" });
                  setHovered(true);
                }
              }}
            >
              <Avatar.Root w={"120px"} h={"120px"}>
                <Avatar.Image src={animeImage || "premium.png"} />
              </Avatar.Root>
            </Box>
          </Tooltip>
        )}

        <Heading color="whiteAlpha.900" textTransform={"uppercase"}>
          <chakra.span color={"green.300"}>{window.location.host}</chakra.span>{" "}
          Domain for <chakra.span color={"green.300"}>Sale</chakra.span> 🎉
        </Heading>
        <Text color="gray.200">
          This premium domain is available for purchase. Don't miss the
          opportunity to own it!
        </Text>
      </VStack>
      <ContactForm />
    </HStack>
  );
}

export default BrandCta;
