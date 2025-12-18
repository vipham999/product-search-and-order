import React from "react";
import type { IProduct } from "../../types/product.model";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Input,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";

interface CartProps {
  cart: Record<number, number>;
  products: IProduct[];
  onQuantityChange: (productId: number, quantity: number) => void;
}

const Cart = ({ cart, products, onQuantityChange }: CartProps) => {
  const items = Object.entries(cart);

  const total = items.reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === Number(id));
    if (!product) return sum;
    return sum + product.price * qty;
  }, 0);

  if (items.length === 0) {
    return (
      <Card>
        <CardBody>
          <FontAwesomeIcon icon={faCartShopping} className="me-1" />
          Cart is empty
        </CardBody>
      </Card>
    );
  }

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h4">
          <FontAwesomeIcon icon={faCartShopping} className="me-1" />
          Order Summary
        </CardTitle>

        <ListGroup flush className="mb-3">
          {items.map(([id, qty]) => {
            const product = products.find((p) => p.id === Number(id));
            if (!product) return null;
            return (
              <ListGroupItem
                key={id}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center gap-2">
                  <span>{product.name}</span>
                  <Input
                    type="number"
                    min={1}
                    max={99}
                    value={qty}
                    onChange={(e) => {
                      const raw = Number(e.target.value);
                      if (!raw || raw < 1) {
                        onQuantityChange(product.id, 1);
                        return;
                      }
                      if (raw > 99) {
                        onQuantityChange(product.id, 99);
                        return;
                      }
                      onQuantityChange(product.id, raw);
                    }}
                    style={{ width: 80 }}
                    bsSize="sm"
                  />
                </div>
                <div className="d-flex align-items-center gap-3">
                  <span>{(product.price * qty).toLocaleString()} ₫</span>
                  <Button
                    color="link"
                    size="sm"
                    className="text-danger p-0"
                    onClick={() => onQuantityChange(product.id, 0)}
                    aria-label={`Remove ${product.name} from cart`}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
              </ListGroupItem>
            );
          })}
        </ListGroup>

        <hr />
        <div className="d-flex justify-content-between fw-bold">
          <span>Total</span>
          <span>{total.toLocaleString()} ₫</span>
        </div>
      </CardBody>
    </Card>
  );
};

export default Cart;
