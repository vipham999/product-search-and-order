import type { Category } from "../../types/product.model";
import { FormGroup, Input } from "reactstrap";

const categories: Category[] = [
  "ALL",
  "Pain Relief",
  "Antibiotic",
  "Supplement",
  "Allergy",
];

interface CategoryFilterProps {
  value: Category;
  onChange: (value: Category) => void;
}

const CategoryFilter = ({ value, onChange }: CategoryFilterProps) => {
  return (
    <FormGroup>
      <Input
        id="categoryFilter"
        type="select"
        value={value}
        onChange={(e) => onChange(e.target.value as Category)}
      >
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default CategoryFilter;
