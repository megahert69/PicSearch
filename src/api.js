import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization:'Client-ID EdBLHgIWSWetK33vnblgKO1XyJNMX6YoPLI5_usKsPU'
        },
        params: {
            query: term, 

        }
    });
    return response.data.results;
};

export default searchImages;