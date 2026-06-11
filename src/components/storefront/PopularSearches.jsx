export default function PopularSearches() {
  return (
    <section className="bg-[#fff0f2] py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">Popular Searches</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Birthday Cakes', 'Anniversary Gifts', 'Valentine Flowers', 'Diwali Hampers', 'Baby Shower Gifts', 'Wedding Decor'].map((tag) => (
                <a key={tag} href="#" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-[#fff]">
                  {tag}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Decoration</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Balloon Arches', 'Theme Parties', 'Floral Backdrops', 'Table Décor', 'Lighting', 'Invites'].map((tag) => (
                <a key={tag} href="#" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-[#fff]">
                  {tag}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Flower Cities</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Muzaffarnagar', 'Meerut', 'Delhi', 'Noida', 'Gurugram', 'Roorkee'].map((tag) => (
                <a key={tag} href="#" className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-[#fff]">
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
