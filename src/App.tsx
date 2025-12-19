import { useEffect, useState } from "react";
import { PRODUCTS } from "./data/products";
import "./index.css";
import { SearchBar } from "./components/search-bar";
import { CategoryFilter } from "./components/category-filter";
import { ProductList } from "./components/product";
import { Cart } from "./components/cart";
import { Button, Col, Container, Row } from "reactstrap";
import type { Category, IProduct } from "./types/product.model";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { fetchFilteredProducts } from "./helper/helper-functions";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<Category>("ALL");
  const [cart, setCart] = useState<Record<number, number>>({}); // {1: 2, 3: 1}
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetch = async () => {
      setLoading(true);
      const data = await fetchFilteredProducts(search, category);
      if (!ignore) {
        setFilteredProducts(data as IProduct[]);
        setLoading(false);
      }
    };

    fetch();

    return () => {
      ignore = true;
    };
  }, [search, category]);

  const updateQuantity = (productId: number, qty: number) => {
    setCart((prev) => {
      if (qty <= 0) {
        const copy = { ...prev } as Record<number, number>;
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: qty };
    });
  };

  const handleResetSearch = () => {
    setSearch("");
    setCategory("ALL");
  };

  return (
    <Container className="py-4">
      <Row className="g-2">
        <Col md={8}>
          <Row>
            {/* Search for products */}
            <Col md={6}>
              <SearchBar value={search} onChange={setSearch} />
            </Col>

            {/* Filter by category */}
            <Col md={6}>
              <CategoryFilter value={category} onChange={setCategory} />
            </Col>

            {/* Reset search and category */}
            <Col md={12} className="mb-2">
              <Button color="primary" onClick={handleResetSearch}>
                <FontAwesomeIcon icon={faRefresh} className="me-1" />
                Refresh
              </Button>
            </Col>

            {/* Product list */}
            <Col md={12}>
              <ProductList
                products={filteredProducts}
                cart={cart}
                onQuantityChange={updateQuantity}
                loading={loading}
              />
            </Col>
          </Row>
        </Col>
        <Col md={4} className="mt-2">
          <Row>
            {/* Cart */}
            <Col md={12}>
              <Cart
                cart={cart}
                products={PRODUCTS}
                onQuantityChange={updateQuantity}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
