class AnimeService {
    private static API_URL = "https://nekos.best/api/v2/neko";
    static async getRandomAnimeImage(): Promise<string> {
        try {
            const response = await fetch(this.API_URL);
            const data = await response.json();
            return data.results[0].url;
        } catch (error) {
            console.error("Error fetching anime image:", error);
            return "";
        }
    }
}

export default AnimeService;
