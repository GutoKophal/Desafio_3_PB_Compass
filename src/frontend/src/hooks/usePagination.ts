import { useState, useEffect } from 'react';

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

const usePagination = (itemsPerPage: number, fetchItems: () => Promise<Tour[]>) => {
  const [items, setItems] = useState<Tour[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchItems();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchData();
  }, [fetchItems]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentItems,
    currentPage,
    totalItems: items.length,
    paginate,
  };
};

export default usePagination;
