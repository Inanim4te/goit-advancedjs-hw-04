import axios from 'axios';

const API_KEY = '33649719-b7fecbfe979c6e7e0b54f5aa7';
export const PER_PAGE = 15;

export async function fetchPics(query, page) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}
