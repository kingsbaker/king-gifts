import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { cakes, flowers, decorations, personalizedGifts, trendingProducts } from "../../data/sampleData";

const occasions = [
  "Birthday",
  "Anniversary",
  "Baby Shower",
  "Wedding",
  "Just Because",
];

const recipients = ["Him", "Her", "Wife", "Husband", "Mother", "Father", "Kids"];
const budgets = ["Under 500", "500-1000", "Above 1000"];

const buildFinderItems = () => {
  const normalize = (item, category) => ({
    ...item,
    category,
    occasions: ["Birthday", "Anniversary", "Wedding", "Just Because", "Baby Shower"],
    recipients: ["Him", "Her", "Wife", "Husband", "Mother", "Father", "Kids"],
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

export default function GiftFinder() {
  const items = useMemo(buildFinderItems, []);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [recipient, setRecipient] = useState(recipients[0]);
  const [budget, setBudget] = useState(budgets[0]);

  const filteredItems = useMemo(
    () =>
      items.filter(
        (item) =>
          item.occasions.includes(occasion) &&
          item.recipients.includes(recipient) &&
          item.budget === budget
      ),
    [items, occasion, recipient, budget]
  );

  return (
    <section className="bg-[#fff0f2] py-12 px-4 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[36px] bg-white p-6 shadow-lg ring-1 ring-gray-200">
        <div className="mb-8 grid gap-4 rounded-3xl border border-[#8f270e]/10 bg-[#fff0f2] p-6 text-center md:grid-cols-4 md:text-left">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#8f270e]">Gift Finder</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">Find the perfect gift fast</h2>
          </div>
          <label className="rounded-3xl bg-white p-4 text-left shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Occasion</span>
            <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className="mt-2 w-full bg-transparent text-gray-900 outline-none">
              {occasions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="rounded-3xl bg-white p-4 text-left shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Recipient</span>
            <select value={recipient} onChange={(e) => setRecipient(e.target.value)} className="mt-2 w-full bg-transparent text-gray-900 outline-none">
              {recipients.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="rounded-3xl bg-white p-4 text-left shadow-sm">
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Budget</span>
            <select value={budget} onChange={(e) => setBudget(e.target.value)} className="mt-2 w-full bg-transparent text-gray-900 outline-none">
              {budgets.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 text-center md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-gray-500">Matching gifts for:</p>
            <p className="mt-2 text-lg font-semibold text-gray-900">{occasion} · {recipient} · {budget}</p>
          </div>
          <div className="rounded-full bg-[#8f270e] px-6 py-3 text-sm font-semibold text-white">{filteredItems.length} items found</div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <ProductCard key={item.id} item={item} />)
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-gray-300 bg-[#fff4ef] p-10 text-center">
              <p className="font-semibold text-gray-900">No perfect match found.</p>
              <p className="mt-2 text-gray-600">Try another occasion, recipient or budget.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
