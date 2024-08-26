export const fetchApi = async (variable, lang) => {
	try {
		const response = await fetch(
			`http://api.aljahoush.com/${variable}`,
			{
				headers: {
					"Cookie": "laravel_session=lCNcI9HCTjVRUPHraSY08hbicraUMWfaT4z2EDW9",
					"Accept-Language": lang,
				},
				method: "GET",
			},
		);
		const data = response.json();
		return data;
	} catch (error) {
		console.log("failed :::", error);
	}
};
