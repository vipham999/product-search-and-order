import React from "react";
import { Input } from "reactstrap";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}
const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <>
      <Input
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
