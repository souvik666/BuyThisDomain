class AnimalService {
    private static API_SOURCES = "https://random.dog/woof.json"

    static async getRandomAnimalImage(): Promise<string> {
        try {
            const response = await fetch(this.API_SOURCES);
            const data = await response.json();
            return data?.url || "";
        } catch (error) {
            console.error("Error fetching animal image:", error);
            return "";
        }
    }
}

export default AnimalService;
