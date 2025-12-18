import { PRODUCTS } from "../data/products";
import type { Category } from "../types/product.model";

export const fetchFilteredProducts = (search: string, category: Category) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        PRODUCTS.filter((p) => {
          const matchName = p.name.toLowerCase().includes(search.toLowerCase());
          const matchCategory = category === "ALL" || p.category === category;
          return matchName && matchCategory;
        })
      );
    }, 800);
  });
