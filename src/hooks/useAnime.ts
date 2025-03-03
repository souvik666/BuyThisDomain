import AnimeService from "@/services/animeService";
import { useState, useEffect } from "react";
 

const useAnimeImage = () => {
  const [animeImage, setAnimeImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const url = await AnimeService.getRandomAnimeImage();
        setAnimeImage(url);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return { animeImage, loading };
};

export default useAnimeImage;
