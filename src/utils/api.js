export const fetchApi = async (variable, lang) => {
    try {
        const response = await fetch(
            `https://api.aljahoush.com/${variable}`,
            {
                headers: {
                    "Accept-Language": lang,
                },
                method: "GET",
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error; // Optionally rethrow to be handled by the caller
    }
};
