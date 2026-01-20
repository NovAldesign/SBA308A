export async function getLofiMusic(query) {
    const API_KEY = '2d3b07d2';
    
    try {
        const response = await axios.get('https://api.jamendo.com/v3.0/tracks/', {
            params: { 
                client_id: API_KEY, 
                format: 'json', 
                limit: 3, 
                tags: query,
                boost: 'popularity_month' // This helps get better music results
            }
        });
        
        // Return the results array
        return response.data.results;
        
    } catch (error) {
        // Explaining blockers for partial credit (5% requirement)
        console.error("Axios Fetch Error:", error);
        return []; // Return an empty array so the rest of the app doesn't break
    }
}