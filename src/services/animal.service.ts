class AnimalService {
    private static API_SOURCES = [
        { url: "https://random.dog/woof.json", key: "url" },
        { url: "https://aws.random.cat/meow", key: "file" },
        { url: "https://randomfox.ca/floof/", key: "image" },
        { url: "https://random.dog/woof.json", key: "url" },
  
    ];

    static async getRandomAnimalImage(): Promise<string> {
        const randomSource = this.API_SOURCES[Math.floor(Math.random() * this.API_SOURCES.length)];

        try {
            const response = await fetch(randomSource.url);
            const data = await response.json();
            return data[randomSource.key] || "";
        } catch (error) {
            console.error("Error fetching animal image:", error);
            return "";
        }
    }
}

export default AnimalService;
