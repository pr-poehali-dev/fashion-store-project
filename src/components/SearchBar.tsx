import { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { products } from "@/data/products";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Поиск товаров...",
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Дебаунсированный поиск для производительности
  const debouncedSearch = useCallback(
    (searchQuery: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        onSearch(searchQuery);
      }, 300);
    },
    [onSearch],
  );

  useEffect(() => {
    if (query.length > 1) {
      // Поиск по названию, бренду, категории с весами для релевантности
      const searchResults = products
        .map((product) => {
          let score = 0;
          const lowerQuery = query.toLowerCase();

          // Точное совпадение в названии - высший приоритет
          if (product.name.toLowerCase().includes(lowerQuery)) score += 10;
          // Совпадение в бренде
          if (product.brand.toLowerCase().includes(lowerQuery)) score += 8;
          // Совпадение в категории
          if (product.category.toLowerCase().includes(lowerQuery)) score += 6;
          // Совпадение в описании
          if (product.description.toLowerCase().includes(lowerQuery))
            score += 3;

          return { product, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 6)
        .map((item) => item.product.name);

      setSuggestions(searchResults);
      setShowSuggestions(searchResults.length > 0);

      // Запускаем дебаунсированный поиск
      debouncedSearch(query);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      if (query === "") {
        onSearch("");
      }
    }
  }, [query, debouncedSearch]);

  const handleSearch = () => {
    onSearch(query);
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
    setShowSuggestions(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  // Закрытие при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-md" ref={inputRef}>
      <div className="relative">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          placeholder={placeholder}
          className="pr-10 focus:ring-2 focus:ring-primary/20"
        />
        <Button
          size="sm"
          variant="ghost"
          onClick={handleSearch}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-primary/10"
        >
          <Icon name="Search" size={16} />
        </Button>
      </div>

      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1 max-h-64 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 text-sm border-b last:border-b-0 transition-colors flex items-center gap-2"
            >
              <Icon name="Search" size={14} className="text-gray-400" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
