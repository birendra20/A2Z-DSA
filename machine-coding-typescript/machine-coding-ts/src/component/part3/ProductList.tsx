import { useState, useEffect, useMemo } from 'react';
import useDebounce from '../part2/useDebounce';
import './ProductList.css';

// Step 1: Define Product interface
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

type SortOrder = 'asc' | 'desc';
type SortBy = 'price' | 'rating';

function ProductList() {
  // Step 2: Add states
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
  const [sortBy, setSortBy] = useState<SortBy>('rating');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Step 4: Debounced search (300-500ms)
  const debouncedSearch = useDebounce(searchQuery, 400);

  // Step 3: Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories for filter dropdown
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    return uniqueCategories.sort();
  }, [products]);

  // Step 7: Wrap derived data in useMemo
  // Order: search → filter → sort
  const processedProducts = useMemo(() => {
    let result = [...products];

    // Step 4: Search by title (case-insensitive)
    if (debouncedSearch) {
      const query = debouncedSearch.toLowerCase();
      result = result.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
    }

    // Step 5: Filter by category
    if (categoryFilter !== 'all') {
      result = result.filter((product) => product.category === categoryFilter);
    }

    // Step 6: Sort by price or rating
    result.sort((a, b) => {
      const comparison = sortBy === 'price' 
        ? a.price - b.price 
        : a.rating.rate - b.rating.rate;
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [products, debouncedSearch, categoryFilter, sortOrder, sortBy]);

  // Step 8: Delete with confirmation
  const handleDelete = (id: number) => {
    const confirmed = window.confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      // Optimistic UI update - no array mutation
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  // Toggle sort order
  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  // Step 9: Handle loading state
  if (loading) {
    return (
      <div className="product-list-container">
        <h1 className="product-list-heading">Product List</h1>
        <div className="loading-message">Loading products...</div>
      </div>
    );
  }

  // Step 9: Handle error state
  if (error) {
    return (
      <div className="product-list-container">
        <h1 className="product-list-heading">Product List</h1>
        <div className="error-message">Failed to load products</div>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h1 className="product-list-heading">Product List</h1>

      {/* Step 4: Search input */}
      <input
        type="text"
        placeholder="Search products by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />

      {/* Controls container */}
      <div className="controls-container">
        {/* Step 5: Filter by category */}
        <div className="filter-group">
          <label htmlFor="category-filter">Category:</label>
          <select
            id="category-filter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Sort by field */}
        <div className="filter-group">
          <label htmlFor="sort-by">Sort by:</label>
          <select
            id="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortBy)}
            className="filter-select"
          >
            <option value="rating">Rating</option>
            <option value="price">Price</option>
          </select>
        </div>

        {/* Step 6: Sort order toggle */}
        <button onClick={toggleSort} className="sort-button">
          {sortOrder === 'asc' ? 'Asc' : 'Desc'}
        </button>
      </div>

      {/* Results count */}
      <div className="results-count">
        Showing {processedProducts.length} of {products.length} products
      </div>

      {/* Step 9: Handle empty state */}
      {processedProducts.length === 0 ? (
        <div className="empty-message">No products found</div>
      ) : (
        // Step 3: Render list
        <div className="product-list">
          {processedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image} 
                alt={product.title} 
                className="product-image"
              />
              <div className="product-content">
                <div className="product-title">{product.title}</div>
                <div className="product-category">{product.category}</div>
                <div className="product-price">${product.price.toFixed(2)}</div>
                <div className="product-rating">
                  <span className="rating-value">{product.rating.rate}</span>
                  <span className="rating-count">({product.rating.count})</span>
                </div>
                <p className="product-description">{product.description}</p>
                {/* Step 8: Delete button */}
                <button onClick={() => handleDelete(product.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
