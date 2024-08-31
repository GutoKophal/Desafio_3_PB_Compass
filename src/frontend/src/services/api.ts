import axios from 'axios';

interface Tour {
  id: number;
  image_url: string;
  city: string;
  country: string;
  name: string;
  averageReview: number;
  duration: number;
  price: number;
  type_id: number;
}

interface Review {
  id: number;
  idTour: number;
  user_name: string;
  user_email: string;
  date: string;
  services: number;
  locations: number;
  amenities: number;
  price_review: number;
  comfort: number;
}

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getTypes = async (): Promise<{ id: number; name: string }[]> => {
  try {
    const response = await api.get('/types');
    return response.data;
  } catch (error) {
    console.error('Error fetching types:', error);
    throw error;
  }
};

export const getTours = async (): Promise<Tour[]> => {
  try {
    const response = await api.get('/tours');
    return response.data;
  } catch (error) {
    console.error('Error fetching tours:', error);
    throw error;
  }
};

export const getReviewsByTourId = async (idTour: number): Promise<Review[]> => {
  try {
    const response = await api.get('/reviews', {
      params: { idTour },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
};

export const getCountReviewsByTourId = async (idTour: number): Promise<number> => {
  try {
    const response = await api.get('/reviews/count', {
      params: { idTour },
    });
    return response.data.count;
  } catch (error) {
    console.error('Error fetching review count:', error);
    throw error;
  }
};
