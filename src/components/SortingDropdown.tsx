import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "newest"
  | "popular";

interface SortingDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SortingDropdown = ({ value, onChange }: SortingDropdownProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">По умолчанию</SelectItem>
        <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
        <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
        <SelectItem value="name-asc">По названию</SelectItem>
        <SelectItem value="newest">Сначала новые</SelectItem>
        <SelectItem value="popular">Популярные</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortingDropdown;
