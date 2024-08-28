export const fetchApi = async (variable, lang) => {

    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", lang);
    myHeaders.append("Cookie", "laravel_session=6oM3FFaszfcS2bV3nWtBQrSNpkdvu3BvQxhRc6h0");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
    };
    try {
        const response = await fetch(
            `https://api.aljahoush.com/${variable}`,requestOptions
           
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



export const fetchPostApi = async (variable, lang) => {

    const myHeaders = new Headers();
    myHeaders.append("Accept-Language", lang); // Set the language dynamically
    myHeaders.append("Cookie", "laravel_session=6oM3FFaszfcS2bV3nWtBQrSNpkdvu3BvQxhRc6h0");

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
    };
    try {
        const response = await fetch(
            `https://api.aljahoush.com/${variable}`,requestOptions
           
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
