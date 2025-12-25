import { useState } from 'react';
import { Plus, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [showAdded, setShowAdded] = useState(false);

  const handleAddToCart = () => {
    const unitPrice = product.price || 0;
    addToCart(product, quantity, unitPrice);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
    setQuantity(1);
  };

  return (
    <div className="card-premium aspect-[3/4] flex flex-col overflow-hidden hover:scale-[1.02] transition-all duration-300 animate-fade-in">
      
      {/* IMAGE — 1:2 of 3:4 (50%) */}
      <div className="relative flex-[2] overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* CONTENT — remaining 1:4 (50%) */}
      <div className="flex flex-col flex-[2] p-3 sm:p-4">
        
        {/* TITLE */}
        <h3 className="text-base sm:text-lg font-display font-bold text-brand-primary mb-1 tracking-luxury">
          {product.name}
        </h3>

        {/* DESCRIPTION — SMALL */}
        <p className="text-text-gray text-[11px] sm:text-xs mb-2 leading-snug line-clamp-1">
          {product.description}
        </p>

        {/* BENEFITS */}
        <div className="mb-2">
          <div className="flex flex-wrap gap-1">
            {product.benefits.map((benefit, index) => (
              <span
                key={index}
                className="text-[9px] sm:text-[10px] bg-card-hover text-brand-primary px-2 py-0.5 rounded-full font-medium"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="mb-2">
          <span className="text-sm font-semibold text-brand-deep">
            ₹{product.price ?? '--'}
          </span>
        </div>

        {/* QUANTITY */}
        <div className="mb-3">
          <div className="flex items-center justify-center gap-2 bg-card-hover rounded-xl p-1.5">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg bg-pure-white border-2 border-brand-soft text-brand-soft font-bold text-base"
            >
              -
            </button>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-12 h-8 text-center text-sm font-bold border-2 border-brand-soft rounded-lg bg-pure-white"
            />

            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg bg-pure-white border-2 border-brand-soft text-brand-soft font-bold text-base"
            >
              +
            </button>
          </div>
        </div>

        {/* CTA — pinned bottom */}
        <button
          onClick={handleAddToCart}
          className={`mt-auto w-full py-2.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-xs ${
            showAdded
              ? 'bg-fruit-yellow text-brand-deep shadow-gold-glow'
              : 'bg-fruit-yellow hover:bg-yellow-dark text-brand-deep shadow-premium'
          }`}
        >
          {showAdded ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Added
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
