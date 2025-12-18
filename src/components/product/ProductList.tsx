import type { IProduct } from "../../types/product.model";
import { Alert, Badge, Button, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface ProductListProps {
  products: IProduct[];
  cart: Record<number, number>;
  onQuantityChange: (productId: number, quantity: number) => void;
  loading?: boolean;
}
const ProductList = ({
  products,
  cart,
  onQuantityChange,
  loading,
}: ProductListProps) => {
  if (loading) {
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th style={{ width: 120 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 4 }).map((_, idx) => (
            <tr key={idx}>
              <td>
                <div className="placeholder-glow">
                  <div className="placeholder col-8 mb-2" />
                </div>
              </td>
              <td>
                <div className="placeholder-glow">
                  <div className="placeholder col-6" />
                </div>
              </td>
              <td>
                <div className="placeholder-glow">
                  <div className="placeholder col-4" />
                </div>
              </td>
              <td>
                <div className="placeholder-glow">
                  <div className="placeholder col-8" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  if (products.length === 0) {
    return <Alert color="info">No products found</Alert>;
  }

  return (
    <Table responsive hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Category</th>
          <th>Price</th>
          <th style={{ width: 120 }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>
              {p.name}{" "}
              {p.isPrescription && (
                <Badge color="danger" pill>
                  Rx
                </Badge>
              )}
            </td>
            <td>{p.category}</td>
            <td>{p.price.toLocaleString()} ₫</td>
            <td>
              <Button
                color="primary"
                size="sm"
                onClick={() => onQuantityChange(p.id, (cart[p.id] ?? 0) + 1)}
              >
                <FontAwesomeIcon icon={faCartShopping} /> Add
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProductList;
