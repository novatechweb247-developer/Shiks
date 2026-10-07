import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../types/fashion';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const quickTerms = ['Velvet Gown', 'Tuxedo Blazer', 'Silk Dress', 'Cashmere Coat', 'Minaudière', 'Amethyst'];

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q)
    );
  }, [query, products]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/75 backdrop-blur-md flex items-start justify-center pt-20 p-4 animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white shadow-2xl border border-purple-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-zinc-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-purple-900 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search silhouettes, gowns, blazers, fabrics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base sm:text-lg focus:outline-none placeholder:text-zinc-400 font-cinzel text-zinc-900"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-zinc-400 hover:text-zinc-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Terms */}
        {!query && (
          <div className="p-6 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-400">
              POPULAR COUTURE SEARCHES
            </span>
            <div className="flex flex-wrap gap-2">
              {quickTerms.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="px-3 py-1.5 bg-purple-50 text-purple-950 hover:bg-purple-900 hover:text-white transition-colors text-xs font-medium cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results list */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
            {results.length === 0 ? (
              <div className="py-12 text-center text-sm text-zinc-500 font-light">
                No couture silhouettes found for "{query}". Try searching "velvet", "blazer", or "silk".
              </div>
            ) : (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 hover:bg-purple-50/60 border border-transparent hover:border-purple-200 transition-all cursor-pointer group"
                >
                  <img
                    src={product.primaryImage}
                    alt={product.name}
                    className="w-14 h-18 object-cover bg-zinc-100 shrink-0"
                  />
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-900">
                      {product.category}
                    </span>
                    <h4 className="text-sm font-bold text-zinc-950 font-cinzel group-hover:text-purple-900 transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-zinc-500 line-clamp-1">{product.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-zinc-900">${product.price.toLocaleString()}</div>
                    <ArrowRight className="w-4 h-4 text-purple-600 ml-auto mt-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
