// Product interface for Albanian ethnic clothing store
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number;
  description: string;
  images: string[];
  alt: string;
  content_id: string;
  availability: 'in stock' | 'out of stock' | 'preorder';
  condition: 'new' | 'used' | 'refurbished';
  brand: string;
  googleProductCategory?: string;
  sizes: string[];
  category: 't-shirt' | 'hoodie' | 'accessories';
  tags: string[];
  metaDescription?: string;
  // Meta-specific fields for CSV export
  metaTitle?: string;
  metaKeywords?: string;
}

// Albanian ethnic clothing products for ultras
export const products: Product[] = [
  {
    id: 'motren-t-shirt',
    name: 'S*ERBI MOTREN Maic',
    slug: 'motren-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Bluzë pambuku premium me dizajnin kunder armikut. E përkryer për të shprehur mbështetjen tuaj për ekipin kombëtar. Bërë me materiale me cilësi të lartë për komoditet dhe qëndrueshmëri.',
    images: [
      '/images/Products/q-motren-maic-1.png',
    ],
    alt: 'Bluzë SHQIPËRIA Flag - Mbështetje për ekipin kombëtar shqiptar',
    content_id: 'q_motren_tshirt_001',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['motren', 'kunder armikut', 'ultra', 'patriotic'],
    metaTitle: 'Bluzë kunder armikut - Mbështetje për Ekipin Kombëtar',
    metaDescription: 'Shprehni krenarinë tuaj shqiptare me bluzën tonë premium me flamur. E përkryer për ultrasit dhe mbështetësit e ekipit kombëtar.',
    metaKeywords: 'Bluzë Shqipëria, flamuri shqiptar, ekip kombëtar, ultra, veshje patriotike'
  },
  {
    id: 'motren-hoodie',
    name: 'Duks S*ERBI MOTREN',
    slug: 'motren-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks i trashë me dizajnin kunder armikut. I ngrohtë dhe i rehatshëm për netët në stadium dhe veshje të rastësishme. Materiale të cilësisë premium.',
    images: [
      '/images/Products/q-motren-duks.png',
    ],
    alt: 'Duks Kunder Armikut - Duks me dizajnin kunder armikut',
    content_id: 'q_motren_hoodie_002',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Outerwear > Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['motren', 'kunder armikut', 'hoodie', 'ultra'],
    metaTitle: 'Duks "Shqiptar i Krenar" - Veshje me Simbolin Shqiptar',
    metaDescription: 'Duks premium me shqiponjën dykrenare shqiptare. I përkryer për ultrasit dhe mbështetësit patriotë.',
    metaKeywords: 'Duks me shqiponjë, shqiponja dykrenare, simboli shqiptar, duks ultra'
  }, {
    id: 'shqiperia-flag-t-shirt',
    name: 'Maic "Shqiptar i Krenar"',
    slug: 'proud-albanian-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maic pambuku premium me dizajnin e flamurit shqiptar. E përkryer për të shprehur mbështetjen tuaj për ekipin kombëtar. Bërë me materiale me cilësi të lartë për komoditet dhe qëndrueshmëri.',
    images: [
      '/images/Products/proud-maic.png',
    ],
    alt: 'Maic SHQIPËRIA Flag - Mbështetje për ekipin kombëtar shqiptar',
    content_id: 'shqiperia_flag_tshirt_001',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['albania', 'flag', 'national team', 'ultra', 'patriotic'],
    metaTitle: 'Maic me Flamurin e SHQIPËRISË - Mbështetje për Ekipin Kombëtar Shqiptar',
    metaDescription: 'Shprehni krenarinë tuaj shqiptare me Maicn tonë premium me flamur. E përkryer për ultrasit dhe mbështetësit e ekipit kombëtar.',
    metaKeywords: 'Maic Shqipëria, flamuri shqiptar, ekip kombëtar, ultra, veshje patriotike'
  },
  {
    id: 'proud-albanian-hoodie',
    name: 'Duks "Shqiptar i Krenar"',
    slug: 'proud-albanian-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks i trashë me shqiponjën dykrenare ikonike shqiptare. I ngrohtë dhe i rehatshëm për netët në stadium dhe veshje të rastësishme. Materiale të cilësisë premium.',
    images: [
      '/images/Products/proud-duks.png',
    ],
    alt: 'Duks Shqiptar i Krenar - Duks me simbolin shqiptar',
    content_id: 'eagle_double_headed_hoodie_002',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Outerwear > Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['eagle', 'double-headed', 'albanian symbol', 'hoodie', 'ultra'],
    metaTitle: 'Duks "Shqiptar i Krenar" - Veshje me Simbolin Shqiptar',
    metaDescription: 'Duks premium me shqiponjën dykrenare shqiptare. I përkryer për ultrasit dhe mbështetësit patriotë.',
    metaKeywords: 'Duks me shqiponjë, shqiponja dykrenare, simboli shqiptar, duks ultra'
  },
  {
    id: 'bac-u-kry-t-shirt',
    name: 'Maic "Bac u Kry"',
    slug: 'bac-u-kry-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maic e stilit zyrtar e ekipit kombëtar shqiptar për vitin 2024. Dizajn autentik me materiale premium. E përkryer për të mbështetur ekipin tuaj me stil.',
    images: [
      '/images/Products/baci-maic-2.png',
      '/images/Products/baci-maic-1.png',
    ],
    alt: 'Fanellë e Ekipit Kombëtar Shqiptar 2024',
    content_id: 'kombetarja_jersey_2024_003',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Uniforms',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['jersey', 'national team', 'albania', '2024', 'official style'],
    metaTitle: 'Fanellë e Ekipit Kombëtar Shqiptar 2024 - Stil Zyrtar',
    metaDescription: 'Mbështetni Shqipërinë me fanellën tonë të stilit zyrtar të ekipit kombëtar 2024. Cilësi premium për mbështetësit e vërtetë.',
    metaKeywords: 'Fanellë Shqipëria, fanellë ekip kombëtar, futboll shqiptar, fanellë 2024'
  },
  {
    id: 'bac-u-kry-hoodie',
    name: 'Duks "Bac u Kry"',
    slug: 'bac-u-kry-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks i stilit zyrtar i ekipit kombëtar shqiptar për vitin 2024. Dizajn autentik me materiale premium. E përkryer për të mbështetur ekipin tuaj me stil.',
    images: [
      '/images/Products/baci-duks-2.png',
      '/images/Products/baci-duks-1.png',
    ],
    alt: 'Fanellë e Ekipit Kombëtar Shqiptar 2024',
    content_id: 'kombetarja_jersey_2024_003',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Uniforms',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['jersey', 'national team', 'albania', '2024', 'official style'],
    metaTitle: 'Duks i Ekipit Kombëtar Shqiptar 2024 - Stil Zyrtar',
    metaDescription: 'Mbështetni Shqipërinë me duksin tonë të stilit zyrtar të ekipit kombëtar 2024. Cilësi premium për mbështetësit e vërtetë.',
    metaKeywords: 'Duks Shqipëria, duks ekip kombëtar, futboll shqiptar, duks 2024'
  },
  {
    id: 'sa-mire-t-shirt',
    name: 'Maic "O SA MIRE"',
    slug: 'o-sa-mire-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponje Abstrakte" për patriotët e vërtetë.',
    images: [
      '/images/Products/sa-mire-maic.png',
    ],
    alt: 'Maic "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'sa_mire_tshirt_027',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['sa', 'mire', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },{
    id: 'sa-mire-hoodie',
    name: 'Duks "O SA MIRE"',
    slug: 'o-sa-mire-hoodie',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponje Abstrakte" për patriotët e vërtetë.',
    images: [
      '/images/Products/sa-mire-duks.png',
    ],
    alt: 'Duks "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'sa_mire_hoodie_028',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['sa', 'mire', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },
  {
    id: 'lorik-cana-t-shirt',
    name: 'Maic Lorik Cana',
    slug: 'lorik-cana-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Lorik Cana" për patriotët e vërtetë.',
    images: [
      '/images/Products/cana-maic.png',
    ],
    alt: 'Maic Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    content_id: 'lorik_cana_tshirt_015',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['lorik', 'cana', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'lorik-cana-hoodie',
    name: 'Duks Lorik Cana',
    slug: 'lorik-cana-hoodie',
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/cana-duks.png',
    ],
    alt: 'Duks Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    content_id: 'lorik_cana_hoodie_016',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['lorik', 'cana', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },
  {
    id: 'skenderbeu-t-shirt',
    name: 'Maic Skënderbeu',
    slug: 'skenderbeu-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maic klasike me Shqiponjën (simboli shqiptar). Dizajn i thjeshtë dhe i fuqishëm për veshje të përditshme. Pambuk i përzier premium.',
    images: [
      '/images/Products/skenderbeu-maic.png',
    ],
    alt: 'Maic Skënderbeu - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_tshirt_005',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['skenderbeu', 'eagle', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic Shqiponja - Dizajn Klasik me Shqiponjën Shqiptare',
    metaDescription: 'Maic klasike me shqiponjën shqiptare. Dizajn i thjeshtë dhe i fuqishëm për veshje patriotike të përditshme.',
    metaKeywords: 'Maic Shqiponja, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },
  {
    id: 'skenderbeu-hoodie',
    name: 'Duks Skënderbeu',
    slug: 'skenderbeu-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks me dizajnin "Dritare e Shqipërisë". I rehatshëm dhe me stil për çdo mbështetës shqiptar.',
    images: [
      '/images/Products/skenderbeu-duks.png',
    ],
    alt: 'Duks Skënderbeu - Dritare e Shqipërisë',
    content_id: 'skenderbeu_hoodie_006',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Outerwear > Hoodies',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['skenderbeu', 'window', 'albania', 'hoodie'],
    metaTitle: 'Duks Skënderbeu - Dritare e Shqipërisë',
    metaDescription: 'Duks me stil me dizajnin "Dritare e Shqipërisë". I përkryer për mbështetësit shqiptarë.',
    metaKeywords: 'Skenderbeu, Dritare e Shqipërisë, duks shqiptar, veshje patriotike'
  },
  {
    id: 'eagle-t-shirt',
    name: 'Maic "Shqiponja"',
    slug: 'eagle-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/eagle-maic.png',
    ],
    alt: 'Maic Kuq e Zi - Ngjyrat Kuq e Zi Shqiptare',
    content_id: 'kuq_e_zi_tshirt_007',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['kuq e zi', 'red black', 'albanian colors', 'patriotic', 'simple'],
    metaTitle: 'Maic Kuq e Zi - Ngjyrat Kuq e Zi Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Kuq e Zi, Maic kuq e zi, ngjyrat shqiptare, veshje patriotike'
  }, {
    id: 'eagle-hoodie',
    name: 'Duks "Shqiponja"',
    slug: 'eagle-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/eagle-duks.png',
    ],
    alt: 'Duks "Shqiponja" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'eagle_hoodie_008',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['kuq e zi', 'red black', 'albanian colors', 'patriotic', 'simple'],
    metaTitle: 'Duks Kuq e Zi - Ngjyrat Kuq e Zi Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Kuq e Zi, Maic kuq e zi, ngjyrat shqiptare, veshje patriotike'
  }, {
    id: 'autochtonus-t-shirt',
    name: 'Maic Autochtonus',
    slug: 'autochtonus-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/autokton-maic-2.png',
      '/images/Products/autokton-maic-1.png',
    ],
    alt: 'Maic Autochtonus - Dizajn me Shqiponjën Shqiptare',
    content_id: 'autochtonus_tshirt_009',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['autochtonus', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic Autochtonus - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'autochtonus-hoodie',
    name: 'Duks Autochtonus',
    slug: 'autochtonus-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/autokton-duks-1.png',
      '/images/Products/autokton-duks-2.png',
    ],
    alt: 'Duks Autochtonus - Dizajn me Shqiponjën Shqiptare',
    content_id: 'autochtonus_hoodie_010',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['autochtonus', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks Autochtonus - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'autochtonus-t-shirt',
    name: 'Maic Autochtonus me Shqiponjë',
    slug: 'autochtonus-eagle-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/autokton-maic-eagle-2.png',
      '/images/Products/autokton-maic-eagle-1.png',
    ],
    alt: 'Maic Autochtonus me Shqiponjë - Dizajn me Shqiponjën Shqiptare',
    content_id: 'autochtonus_eagle_tshirt_011',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['autochtonus', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic Autochtonus me Shqiponjë - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'autochtonus-eagle-hoodie',
    name: 'Duks Autochtonus me Shqiponjë',
    slug: 'autochtonus-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/autokton-duks-eagle-1.png',
      '/images/Products/autokton-duks-eagle-2.png',
    ],
    alt: 'Duks Autochtonus - Dizajn me Shqiponjën Shqiptare',
    content_id: 'autochtonus_eagle_hoodie_012',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['autochtonus', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks Autochtonus me Shqiponjë - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'uck-t-shirt',
    name: 'Maic UÇK',
    slug: 'uck-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "UÇK" për patriotët e vërtetë.',
    images: [
      '/images/Products/uck-maic-1.png',
      '/images/Products/uck-maic-2.png',
    ],
    alt: 'Maic UÇK - Dizajn me Shqiponjën Shqiptare',
    content_id: 'uck_tshirt_013',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['uck', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic UÇK - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'uck-hoodie',
    name: 'Duks UÇK',
    slug: 'uck-hoodie',
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "UÇK" për patriotët e vërtetë.',
    images: [
      '/images/Products/uck-duks-1.png',
      '/images/Products/uck-duks-2.png',
    ],
    alt: 'Duks UÇK - Dizajn me Shqiponjën Shqiptare',
    content_id: 'uck_hoodie_014',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['uck', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks UÇK - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'step-on-shit-t-shirt',
    name: 'Maic "Step on shit"',
    slug: 'step-on-shit-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Lorik Cana" për patriotët e vërtetë.',
    images: [
      '/images/Products/step-maic.png',
    ],
    alt: 'Maic "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'step_on_shit_tshirt_017',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['step', 'on', 'shit', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'step-on-shit-hoodie',
    name: 'Duks "Step on shit"',
    slug: 'step-on-shit-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/step-duks.png',
    ],
    alt: 'Duks Step on shit - Dizajn me Shqiponjën Shqiptare',
    content_id: 'step_on_shit_hoodie_018',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['step', 'on', 'shit', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'shqiponje-abstrakte-t-shirt',
    name: 'Maic "Shqiponje Abstrakte"',
    slug: 'shqiponje-abstrakte-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponje Abstrakte" për patriotët e vërtetë.',
    images: [
      '/images/Products/shqiponje-maic-1.png',
      '/images/Products/shqiponje-maic-2.png',
    ],
    alt: 'Maic "Shqiponje Abstrakte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'shqiponje_abstrakte_tshirt_019',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['shqiponje', 'abstrakte', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'shqiponje-abstrakte-hoodie',
    name: 'Duks "Shqiponje Abstrakte"',
    slug: 'shqiponje-abstrakte-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/shqiponje-duks-1.png',
      '/images/Products/shqiponje-duks-2.png',
    ],
    alt: 'Duks Shqiponje Abstrakte - Dizajn me Shqiponjën Shqiptare',
    content_id: 'shqiponje_abstrakte_hoodie_020',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['shqiponje', 'abstrakte', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "Shqiponje Abstrakte" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },{
    id: 'skenderbeu-lufte-t-shirt',
    name: 'Maic "Skenderbeu Lufte"',
    slug: 'skenderbeu-lufte-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponje Abstrakte" për patriotët e vërtetë.',
    images: [
      '/images/Products/skenderbeu-lufte-maic.png',
    ],
    alt: 'Maic "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_lufte_tshirt_021',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['skenderbeu', 'lufte', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'skenderbeu-lufte-hoodie',
    name: 'Duks "Skenderbeu Lufte"',
    slug: 'skenderbeu-lufte-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/skenderbeu-lufte-duks.png',
    ],
    alt: 'Duks Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_lufte_hoodie_022',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['skenderbeu', 'lufte', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },{
    id: 'shqiponje-abstrakte-t-shirt',
    name: 'Maic "Adem Jashari"',
    slug: 'adem-jasha-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponje Abstrakte" për patriotët e vërtetë.',
    images: [
      '/images/Products/adem-jashari-maic.png',
    ],
    alt: 'Maic "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'adem_jashari_tshirt_023',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['adem', 'jasha', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'adem-jashari-hoodie',
    name: 'Duks "Adem Jashari"',
    slug: 'adem-jashari-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/adem-jashari-duks.png',
    ],
    alt: 'Duks Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    content_id: 'adem_jashari_hoodie_024',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['adem', 'jasha', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "Adem Jashari" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },{
    id: 'skenderbeu-mozaik-t-shirt',
    name: 'Maic "Skenderbeu Mozaik"',
    slug: 'skenderbeu-mozaik-t-shirt',
    price: 15.90,
    description: 'Maic e thjeshtë dhe e fuqishme me ngjyrat shqiptare. Dizajn "Shqiponje Abstrakte" për patriotët e vërtetë.',
    images: [
      '/images/Products/skenderbeu-art-maic.png',
    ],
    alt: 'Maic "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_mozai_tshirt_025',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['skenderbeu', 'mozai', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maic "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maic e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'skenderbeu-mozai-hoodie',
    name: 'Duks "Skenderbeu Mozaik"',
    slug: 'skenderbeu-mozai-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks i thjeshtë dhe i fuqishëm me ngjyrat shqiptare. Dizajn "Shqiponjë" për patriotët e vërtetë.',
    images: [
      '/images/Products/skenderbeu-art-duks.png',
    ],
    alt: 'Duks Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_mozai_hoodie_026',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'hoodie',
    tags: ['skenderbeu', 'mozai', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "Adem Jashari" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Duks i thjeshtë dhe i fuqishëm në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },
  

];

// Function to get all products
export function getAllProducts(): Product[] {
  return products;
}

// Function to get product by slug
export function getProductBySlug(slug: string): Product | null {
  return products.find(product => product.slug === slug) || null;
}

// Function to get all product slugs (for static generation)
export function getAllProductSlugs(): string[] {
  return products.map(product => product.slug);
}

// Function to get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(product => product.category === category);
}

// Function to get products by availability
export function getProductsByAvailability(availability: Product['availability']): Product[] {
  return products.filter(product => product.availability === availability);
}

// Function to search products
export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

// Function to get products for catalog feed (optimized)
export function getProductsForCatalog(): Product[] {
  return products.filter(product => product.availability === 'in stock');
}

// Function to export products for Meta CSV
export function exportProductsForMeta(): Array<{
  id: string;
  title: string;
  description: string;
  availability: string;
  condition: string;
  price: string;
  link: string;
  image_link: string;
  brand: string;
  google_product_category: string;
  custom_label_0: string; // category
  custom_label_1: string; // tags
}> {
  return products.map(product => ({
    id: product.content_id,
    title: product.metaTitle || product.name,
    description: product.metaDescription || product.description,
    availability: product.availability === 'in stock' ? 'in stock' : 'out of stock', // Simplification for feed
    condition: product.condition,
    price: `${product.price} EUR`,
    link: `https://yourdomain.com/product/${product.slug}`,
    image_link: product.images[0],
    brand: product.brand,
    google_product_category: product.googleProductCategory || 'Apparel & Accessories',
    custom_label_0: product.category,
    custom_label_1: product.tags.join(', ')
  }));
}

// Function to export products as CSV string
export function exportProductsAsCSV(): string {
  const metaData = exportProductsForMeta();
  if (metaData.length === 0) {
    return '';
  }
  const headers = Object.keys(metaData[0]).join(',');
  const rows = metaData.map(row =>
    Object.values(row).map(value => {
      // Simple escape for CSV: replace double quotes with two double quotes and wrap the whole field in double quotes
      const escapedValue = String(value).replace(/"/g, '""');
      return `"${escapedValue}"`;
    }).join(',')
  );

  return [headers, ...rows].join('\n');
}

// Categories for filtering
export const categories = [
  { value: 't-shirt', label: 'Maic' },
  { value: 'hoodie', label: 'Duks' },
  { value: 'accessories', label: 'Aksesorë' }
] as const;

// Sizes available
export const availableSizes = ['S', 'M', 'L', 'XL', 'XXL'] as const;

// Brands
export const brands = ['Maica Etnike'] as const;