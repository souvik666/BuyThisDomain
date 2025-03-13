 
import AnimalService from "@/services/animal.service";
import { useState, useEffect } from "react";
 

const useAnimalImage = () => {
  const [animeImage, setAnimeImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const url = await AnimalService.getRandomAnimalImage();
        setAnimeImage(url);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  return { animeImage, loading };
};

export default useAnimalImage;
