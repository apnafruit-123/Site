export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  benefits: string[];
  price?: number; // price in ₹
}

export interface CartItem {
  product: Product;
  quantity: number;
  price: number;
}

export const PRODUCTS: Product[] = [
  // ================= DRIED FRUITS =================
  { id: 'dried-alovera', name: 'Dried Alovera', description: 'Naturally dried aloe vera pieces — chewy, nutritious, and great for snacks or recipes.', image: '/products/dried_alovera.png', benefits: ['Rich in Nutrients', 'Natural & Preservative-free'], price: 420 },
  { id: 'dried-blueberry', name: 'Dried Blueberry', description: 'Sweet and tart dried blueberries, perfect for cereals and baking.', image: '/products/dried_blueberry.png', benefits: ['Antioxidant Rich', 'Flavorful Snacking'], price: 650 },
  { id: 'dried-cranberry', name: 'Dried Cranberry', description: 'Tangy dried cranberries for salads, baking, and snacking.', image: '/products/dried_canberry.png', benefits: ['High in Antioxidants', 'Versatile Use'], price: 600 },
  { id: 'dried-mango', name: 'Dried Mango', description: 'Sun-dried mango slices with concentrated tropical flavor.', image: '/products/dried_mango.jpg', benefits: ['High Vitamin C', 'Natural Sweetness'], price: 480 },
  { id: 'dried-orange', name: 'Dried Orange', description: 'Citrus-packed dried orange slices — zesty and bright.', image: '/products/dried_orange.png', benefits: ['Vitamin C', 'Bright Flavor'], price: 450 },
  { id: 'dried-papaya', name: 'Dried Papaya', description: 'Chewy dried papaya, a naturally sweet tropical treat.', image: '/products/dried_papaya.jpg', benefits: ['Digestive Enzymes', 'Natural Sweetness'], price: 430 },
  { id: 'dried-peach-red', name: 'Dried Peach (Red)', description: 'Sun-dried red peach slices — soft, sweet, and aromatic.', image: '/products/dried_peach_red.jpg', benefits: ['Rich Flavor', 'High in Vitamins'], price: 520 },
  { id: 'dried-peach-yellow', name: 'Dried Peach (Yellow)', description: 'Sun-dried yellow peach slices with balanced sweetness.', image: '/products/dried_peach_yellow.jpg', benefits: ['Balanced Sweetness', 'Good Snack'], price: 520 },
  { id: 'dried-pineapple', name: 'Dried Pineapple', description: 'Tropical dried pineapple rings — tangy and chewy.', image: '/products/dried_pineapple.jpg', benefits: ['Vitamin C', 'Tropical Flavor'], price: 460 },
  { id: 'dried-pomelo-green', name: 'Dried Pomelo (Green)', description: 'Lightly dried pomelo with a gentle tang and texture.', image: '/products/dried_pomelo_green.jpg', benefits: ['Citrus Freshness', 'Aromatic'], price: 580 },
  { id: 'dried-pomelo-natural', name: 'Dried Pomelo (Natural)', description: 'Naturally dried pomelo with subtle sweetness.', image: '/products/dried_pomelo_natural.png', benefits: ['Natural Drying', 'Mild Sweetness'], price: 560 },
  { id: 'dried-red-cherry', name: 'Dried Red Cherry', description: 'Premium dried red cherries — tart-sweet and juicy.', image: '/products/dried_red_cherry.jpg', benefits: ['Antioxidant Rich', 'Premium Snack'], price: 620 },
  { id: 'dried-strawberry', name: 'Dried Strawberry', description: 'Sweet dried strawberries with intense berry flavor.', image: '/products/dried_strawberry.jpg', benefits: ['High Vitamin C', 'Great for Cereal'], price: 700 },
  { id: 'dried-kiwi', name: 'Dried Kiwi', description: 'Tangy-sweet dried kiwi slices with chewy texture and vibrant taste.', image: '/products/dried_kiwi.jpg', benefits: ['Vitamin C Rich', 'Exotic Flavor'], price: 720 },

  // ================= MIXES =================
  { id: 'dried-mix-fruits', name: 'Dried Mix Fruits', description: 'A curated mix of dried seasonal fruits for snacking.', image: '/products/dried_mix_fruits.png', benefits: ['Variety Pack', 'Balanced Flavors'], price: 550 },
  { id: 'mix-berry-dried', name: 'Mix Berry Dried', description: 'Mixed berries — strawberries, blueberries, and more.', image: '/products/mix_berry_dried.jpg', benefits: ['Antioxidant Mix', 'Bright Flavors'], price: 500 },
  { id: 'dry-fruit-mix-roasted', name: 'Dry Fruit Mix (Roasted)', description: 'Crunchy roasted dry fruits — lightly roasted for enhanced flavor.', image: '/products/dry_fruit_mix(roasted).jpg', benefits: ['Crunchy Snack', 'Protein Rich'], price: 600 },
  { id: 'dry-fruit-mix-ghee-roasted', name: 'Dry Fruit Mix (Ghee Roasted)', description: 'Premium dry fruits slow-roasted in pure ghee for rich aroma and taste.', image: '/products/dry_fruit_mix(ghee_roasted).png', benefits: ['Rich Taste', 'Energy Boost'], price: 650 },
  { id: 'masala-dry-fruit-mix', name: 'Masala Dry Fruit Mix', description: 'Spicy masala-coated dry fruits with a bold Indian flavor.', image: '/products/masala_dry_fruit_mix.jpg', benefits: ['Spicy Snack', 'Flavour Packed'], price: 620 },
  { id: 'salted-dry-fruit', name: 'Salted Dry Fruit Mix', description: 'Lightly salted premium dry fruits for guilt-free snacking.', image: '/products/salted_dry_fruit.webp', benefits: ['Low Sugar', 'Healthy Snack'], price: 580 },
  { id: 'dry-fruit-shake-mix', name: 'Dry Fruit Shake Mix', description: 'Finely blended dry fruits for instant shakes and smoothies.', image: '/products/dry_fruit_shake_mix.png', benefits: ['Instant Energy', 'Easy to Mix'], price: 420 },
  { id: 'fruit-mix', name: 'Fruit Mix', description: 'Naturally dried assortment of mixed fruits for everyday snacking.', image: '/products/fruit_mix.png', benefits: ['Balanced Nutrition', 'Variety Pack'], price: 500 },

  // ================= SEEDS =================
  { id: 'seeds-mix-roasted', name: 'Seeds Mix (Roasted)', description: 'Roasted sunflower, pumpkin, flax, and melon seeds.', image: '/products/seeds_mix(roasted).jpg', benefits: ['High Protein', 'Heart Healthy'], price: 400 },
  { id: 'seeds-mix-salted', name: 'Seeds Mix (Salted)', description: 'Lightly salted mixed seeds — crunchy and nutritious.', image: '/products/seeds_mix(salted).jpg', benefits: ['Mineral Rich', 'Crunchy Snack'], price: 390 },

  // ================= TRADITIONAL =================
  { id: 'khajur-pak', name: 'Khajur Pak', description: 'Traditional date-based sweet — rich and energy-dense.', image: '/products/khajur_pak.jpg', benefits: ['Natural Sweetener', 'Energy Boost'], price: 280 },

  // ================= POWDERS =================
  { id: 'mango-powder', name: 'Mango Powder', description: 'Concentrated mango powder for smoothies and flavoring.', image: '/products/mango_powder.jpg', benefits: ['Flavor Booster', 'Convenient Use'], price: 260 },
  { id: 'strawberry-powder', name: 'Strawberry Powder', description: 'Freeze-dried strawberry powder for shakes and desserts.', image: '/products/strawberry_powder.png', benefits: ['Natural Flavor', 'Easy Mix'], price: 270 },
  { id: 'pineapple-powder', name: 'Pineapple Powder', description: 'Tropical pineapple powder for beverages and recipes.', image: '/products/pineapple_powder.jpg', benefits: ['Tropical Taste', 'Mixes Easily'], price: 240 },
  { id: 'lime-powder', name: 'Lime Powder', description: 'Zesty lime powder for flavoring and seasoning.', image: '/products/lime_powder.jpg', benefits: ['Tangy Flavor', 'Versatile'], price: 230 },
  { id: 'raw-banana-powder', name: 'Raw Banana Powder', description: 'Finely milled banana powder for baking and shakes.', image: '/products/raw_banana_powder.jpg', benefits: ['Baking Friendly', 'Natural Sweetness'], price: 250 },
  { id: 'beetroot-powder', name: 'Beetroot Powder', description: 'Nutrient-dense beetroot powder for health boosts.', image: '/products/beetroot_powder.png', benefits: ['Rich in Antioxidants', 'Supports Stamina'], price: 220 },
  { id: 'amla-powder', name: 'Amla Powder', description: 'Vitamin C-rich amla powder for immunity and wellness.', image: '/products/amla_powder.jpg', benefits: ['Immunity Support', 'Antioxidant Rich'], price: 240 },
  { id: 'carrot-powder', name: 'Carrot Powder', description: 'Bright carrot powder for smoothies and baking.', image: '/products/carrot_powder.png', benefits: ['Beta-Carotene', 'Natural Color'], price: 260 },
  { id: 'apple-powder', name: 'Apple Powder', description: 'Dried apple powder to add sweetness and flavor.', image: '/products/apple_powder.png', benefits: ['Natural Sweetness', 'Versatile Use'], price: 280 },
  { id: 'abc-powder', name: 'ABC Powder', description: 'Apple–Beetroot–Carrot powdered blend for daily nutrition.', image: '/products/abc_powder.jpg', benefits: ['Balanced Nutrition', 'Blend Convenience'], price: 300 },
  { id: 'pomegranate-powder', name: 'Pomegranate Powder', description: 'Antioxidant-packed pomegranate powder.', image: '/products/pomegranate_powder.webp', benefits: ['Antioxidants', 'Vibrant Flavor'], price: 290 },
  { id: 'papaya-powder', name: 'Papaya Powder', description: 'Tropical papaya powder for smoothies and recipes.', image: '/products/papaya_powder.jpg', benefits: ['Digestive Enzymes', 'Tropical Taste'], price: 270 },
  { id: 'watermelon-powder', name: 'Watermelon Powder', description: 'Refreshing watermelon powder for beverages.', image: '/products/watermelon_powder.jpg', benefits: ['Hydrating Flavor', 'Light Taste'], price: 260 },
  { id: 'muskmelon-powder', name: 'Muskmelon Powder', description: 'Sweet muskmelon powder for shakes and desserts.', image: '/products/muskmelon_powder.jpg', benefits: ['Sweet Aroma', 'Smooth Texture'], price: 250 },
  { id: 'moringa-powder', name: 'Moringa Powder', description: 'Nutrient-rich moringa powder for overall wellness.', image: '/products/moringa_powder.png', benefits: ['Superfood Nutrients', 'Immunity Support'], price: 320 }
];


