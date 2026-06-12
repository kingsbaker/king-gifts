import { createContext, useContext, useMemo } from "react";
import Fuse from "fuse.js";
import {
  trendingProducts,
  flowers,
  cakes,
  decorations,
  personalizedGifts,
} from "../data/sampleData";

const SearchContext = createContext(null);

const buildSearchProducts = () => {
  const normalize = (item, category) => ({
    ...item,
    category,
    keywords: [item.name, category, ...(item.tags || [])].join(" "),
    occasionTags: [
      ...(category === "Cakes" ? ["Birthday", "Anniversary", "Just Because", "Wedding"] : []),
      ...(category === "Flowers" ? ["Birthday", "Anniversary", "Wedding", "Just Because"] : []),
      ...(category === "Gifts" ? ["Birthday", "Anniversary", "Wedding", "Baby Shower", "Corporate"] : []),
      ...(category === "Decorations" ? ["Birthday", "Anniversary", "Baby Shower", "Wedding", "Festival"] : []),
      ...(category === "Trending" ? ["Birthday", "Anniversary", "Wedding", "Just Because"] : []),
    ],
    recipientTags: [
      ...(category === "Cakes" ? ["Him", "Her", "Wife", "Husband", "Kids"] : []),
      ...(category === "Flowers" ? ["Her", "Wife", "Mother", "Kids"] : []),
      ...(category === "Gifts" ? ["Him", "Her", "Wife", "Husband", "Mother", "Father", "Kids"] : []),
      ...(category === "Decorations" ? ["Family", "Office"] : []),
      ...(category === "Trending" ? ["Him", "Her", "Wife", "Husband", "Kids"] : []),
    ],
    budget: item.sp <= 500 ? "Under 500" : item.sp <= 1000 ? "500-1000" : "Above 1000",
  });

  return [
    ...cakes.map((item) => normalize(item, "Cakes")),
    ...flowers.map((item) => normalize(item, "Flowers")),
    ...decorations.map((item) => normalize(item, "Decorations")),
    ...personalizedGifts.map((item) => normalize(item, "Gifts")),
    ...trendingProducts.map((item) => normalize(item, "Trending")),
  ];
};

export function SearchProvider({ children }) {
  const products = useMemo(buildSearchProducts, []);
  const fuse = useMemo(
    () =>
      new Fuse(products, {
        keys: ["name", "category", "keywords", "occasionTags", "recipientTags"],
        threshold: 0.35,
        distance: 100,
        minMatchCharLength: 2,
        ignoreLocation: true,
      }),
    [products]
  );

  const searchWithQuery = (query) => {
    if (!query || !query.trim()) return products;
    const normalized = query.trim();
    return fuse.search(normalized).map((result) => result.item);
  };

  return (
    <SearchContext.Provider value={{ searchWithQuery, products }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
}
