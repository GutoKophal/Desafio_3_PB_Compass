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

  // Calculate the index of the last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Calculate the index of the first item on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Select only the items for the current page
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    currentItems,
    currentPage,
    totalItems: items.length,
    paginate,
  };
};

export default usePagination;
