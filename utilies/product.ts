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
    name: 'Maic "S*ERBI MOTREN"',
    slug: 'motren-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn kundër armikut. E përkryer për të shprehur mbështetjen tuaj për ekipin tonë kombëtar. E prodhuar me materiale të cilësisë së lartë për komoditet dhe qëndrueshmëri.',
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
    name: 'Duks "S*ERBI MOTREN"',
    slug: 'motren-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Maicë premium me dizajn kundër armikut. E përkryer për të shprehur mbështetjen tuaj për ekipin tonë kombëtar. E prodhuar me materiale të cilësisë së lartë për komoditet dhe qëndrueshmëri.',
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
    name: 'Maice “Proud to Be Albanian”',
    slug: 'proud-albanian-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn “Proud to Be Albanian” dhe me figurën prominente shqiptare - Skënderbeun. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/proud-maic.png',
    ],
    alt: 'Maice SHQIPËRIA Flag - Mbështetje për ekipin kombëtar shqiptar',
    content_id: 'shqiperia_flag_tshirt_001',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['albania', 'flag', 'national team', 'ultra', 'patriotic'],
    metaTitle: 'Maice me Flamurin e SHQIPËRISË - Mbështetje për Ekipin Kombëtar Shqiptar',
    metaDescription: 'Shprehni krenarinë tuaj shqiptare me Maicn tonë premium me flamur. E përkryer për ultrasit dhe mbështetësit e ekipit kombëtar.',
    metaKeywords: 'Maice Shqipëria, flamuri shqiptar, ekip kombëtar, ultra, veshje patriotike'
  },
  {
    id: 'proud-albanian-hoodie',
    name: 'Duks “Proud to Be Albanian”',
    slug: 'proud-albanian-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Maicë premium me dizajn “Proud to Be Albanian” dhe me figurën prominente shqiptare - Skënderbeun. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
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
    name: 'Maice “BAC, U KRY”',
    slug: 'bac-u-kry-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn të Bacës Adem. Adem Jashari - legjendë e paharruar në trojet shqiptare. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
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
    name: 'Maice “Vargjet e Kombit”',
    slug: 'o-sa-mire-t-shirt',
    price: 15.90,
    description: 'Maicë premium me vargjet e njohura “O sa mirë me qenë shqiptar” - një thirrje që çdo shqiptar e mban në zemër që nga fëmijëria. E prodhuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/sa-mire-maic.png',
    ],
    alt: 'Maice "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'sa_mire_tshirt_027',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['sa', 'mire', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'sa-mire-hoodie',
    name: 'Duks "Vargjet e Kombit"',
    slug: 'o-sa-mire-hoodie',
    price: 15.90,
    description: 'Duks premium me vargjet e njohura “O sa mirë me qenë shqiptar” - një thirrje që çdo shqiptar e mban në zemër që nga fëmijëria. I prodhuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/sa-mire-duks.png',
    ],
    alt: 'Duks "Vargjet e Kombit" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'sa_mire_hoodie_028',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['sa', 'mire', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Duks "O SA MIRE" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },
  {
    id: 'lorik-cana-t-shirt',
    name: 'Maice "Lorik Cana"',
    slug: 'lorik-cana-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn të Lorik Canës. Një moment i paharrueshëm për çdo shqiptar anembanë globit - çasti kur u shkrua historia në Beograd nga luani dhe kapiteni i ekipit, Lorik Cana. E punuar me materiale cilësore për rehati dhe rezistencë.',
    images: [
      '/images/Products/cana-maic.png',
    ],
    alt: 'Maice Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    content_id: 'lorik_cana_tshirt_015',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['lorik', 'cana', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice Lorik Cana - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'lorik-cana-hoodie',
    name: 'Duks "Lorik Cana:',
    slug: 'lorik-cana-hoodie',
    price: 25.90,
    description: 'Duks premium me dizajn të Lorik Canës. Një moment i paharrueshëm për çdo shqiptar anembanë globit - çasti kur u shkrua historia në Beograd nga luani dhe kapiteni i ekipit, Lorik Cana. I punuar me materiale cilësore për rehati dhe rezistencë.',
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
    name: 'Maice "GJKS"',
    slug: 'skenderbeu-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn të heroit kombëtar Gjergj Kastrioti - Skënderbeu. Hero kombëtar që simbolizon trimërinë dhe atdhe-dashurinë. E punuar me materiale cilësore për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/skenderbeu-maic.png',
    ],
    alt: 'Maice Skënderbeu - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_tshirt_005',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['skenderbeu', 'eagle', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice Shqiponja - Dizajn Klasik me Shqiponjën Shqiptare',
    metaDescription: 'Maice klasike me shqiponjën shqiptare. Dizajn i thjeshtë dhe i fuqishëm për veshje patriotike të përditshme.',
    metaKeywords: 'Maice Shqiponja, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  },
  {
    id: 'skenderbeu-hoodie',
    name: 'DUKS “GJKS”',
    slug: 'skenderbeu-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks premium me dizajn të heroit kombëtar Gjergj Kastrioti - Skënderbeu. Hero kombëtar që simbolizon trimërinë dhe atdhe-dashurinë. I punuar me materiale cilësore për rehati dhe qëndrueshmëri.',
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
    name: 'Maice “FLUTURIMI I LIRISE”',
    slug: 'eagle-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn të shqiponjës dykrenare. “Nën hijen e shqiponjës, jemi gjithmonë të lirë.” E punuar me materiale cilësore për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/eagle-maic.png',
    ],
    alt: 'Maice Kuq e Zi - Ngjyrat Kuq e Zi Shqiptare',
    content_id: 'kuq_e_zi_tshirt_007',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['kuq e zi', 'red black', 'albanian colors', 'patriotic', 'simple'],
    metaTitle: 'Maice Kuq e Zi - Ngjyrat Kuq e Zi Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Kuq e Zi, Maice kuq e zi, ngjyrat shqiptare, veshje patriotike'
  }, {
    id: 'eagle-hoodie',
    name: 'Duks "FLUTURIMI I LIRISE"',
    slug: 'eagle-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks premium me dizajn të shqiponjës dykrenare. “Nën hijen e shqiponjës, jemi gjithmonë të lirë.” I punuar me materiale cilësore për rehati dhe qëndrueshmëri.',
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
    metaKeywords: 'Kuq e Zi, Maice kuq e zi, ngjyrat shqiptare, veshje patriotike'
  }, {
    id: 'autochtonus-t-shirt',
    name: 'Maice "Autochtonus"',
    slug: 'autochtonus-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn Autochthonous. Një moment historik në kryeqytetin serb që na solli 3 pikë dhe emocionoi çdo shqiptar. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/autokton-maic-2.png',
      '/images/Products/autokton-maic-1.png',
    ],
    alt: 'Maice Autochtonus - Dizajn me Shqiponjën Shqiptare',
    content_id: 'autochtonus_tshirt_009',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['autochtonus', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice Autochtonus - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'autochtonus-hoodie',
    name: 'Duks Autochtonus',
    slug: 'autochtonus-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks premium me dizajn Autochthonous. Një moment historik në kryeqytetin serb që na solli 3 pikë dhe emocionoi çdo shqiptar. I punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
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
    name: 'Maice “Skanderbeg Spirit”',
    slug: 'autochtonus-eagle-t-shirt',
    price: 15.90,
    comparePrice: 19.99,
    description: 'Maicë premium me dizajn të ‘shqiponjës së ngritur nga Skënderbeu’. Një simbol i pavarësisë së parë që na udhëhoqi drejt hapave të çlirimit. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/autokton-maic-eagle-2.png',
      '/images/Products/autokton-maic-eagle-1.png',
    ],
    alt: 'Maice Autochtonus me Shqiponjë - Dizajn me Shqiponjën Shqiptare',
    content_id: 'autochtonus_eagle_tshirt_011',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['autochtonus', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice Autochtonus me Shqiponjë - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'autochtonus-eagle-hoodie',
    name: 'DUKS "Skanderbeg Spirit"',
    slug: 'autochtonus-hoodie',
    price: 25.90,
    comparePrice: 28.99,
    description: 'Duks premium me dizajn të ‘shqiponjës së ngritur nga Skënderbeu’. Një simbol i pavarësisë së parë që na udhëhoqi drejt hapave të çlirimit. I punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
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
    name: 'Maice "UÇK"',
    slug: 'uck-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn të UÇK-së. Një dedikim për ushtrinë tonë çlirimtare, duke simbolizuar trimërinë dhe vendosmërinë e pathyeshme ndër vite. E prodhuar me materiale të cilësisë së lartë për komoditet dhe qëndrueshmëri.',
    images: [
      '/images/Products/uck-maic-1.png',
      '/images/Products/uck-maic-2.png',
    ],
    alt: 'Maice UÇK - Dizajn me Shqiponjën Shqiptare',
    content_id: 'uck_tshirt_013',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['uck', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice UÇK - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'uck-hoodie',
    name: 'Duks "UÇK"',
    slug: 'uck-hoodie',
    price: 25.90,
    description: 'Duks premium me dizajn të UÇK-së. Një dedikim për ushtrinë tonë çlirimtare, duke simbolizuar trimërinë dhe vendosmërinë e pathyeshme ndër vite. I prodhuar me materiale të cilësisë së lartë për komoditet dhe qëndrueshmëri.',
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
    name: 'Maice "Step on shit"',
    slug: 'step-on-shit-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn kundër armikut. E përkryer për të shprehur mbështetjen tuaj për ekipin tonë kombëtar. E prodhuar me materiale të cilësisë së lartë për komoditet dhe qëndrueshmëri.',
    images: [
      '/images/Products/step-maic.png',
    ],
    alt: 'Maice "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'step_on_shit_tshirt_017',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['step', 'on', 'shit', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'step-on-shit-hoodie',
    name: 'Duks "Step on shit"',
    slug: 'step-on-shit-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Maicë premium me dizajn kundër armikut. E përkryer për të shprehur mbështetjen tuaj për ekipin tonë kombëtar. E prodhuar me materiale të cilësisë së lartë për komoditet dhe qëndrueshmëri.',
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
    name: 'Maice "RED & BLACK"',
    slug: 'shqiponje-abstrakte-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn të shqiponjës dykrenare dhe ngjyrat kombëtare të kombinuara. E kuqja simbolizon gjakun e derdhur për liri, ndërsa e zeza simbolizon forcën e popullit tonë. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/shqiponje-maic-1.png',
      '/images/Products/shqiponje-maic-2.png',
    ],
    alt: 'Maice "Shqiponje Abstrakte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'shqiponje_abstrakte_tshirt_019',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['shqiponje', 'abstrakte', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'shqiponje-abstrakte-hoodie',
    name: 'Duks "RED & BLACK"',
    slug: 'shqiponje-abstrakte-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks premium me dizajn të shqiponjës dykrenare dhe ngjyrat kombëtare të kombinuara. E kuqja simbolizon gjakun e derdhur për liri, ndërsa e zeza simbolizon forcën e popullit tonë. I punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
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
  }, {
    id: 'skenderbeu-lufte-t-shirt',
    name: 'Maice “SkEnderbeu Art”',
    slug: 'skenderbeu-lufte-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn artistik të heroit kombëtar, Gjergj Kastrioti - Skënderbeu. Një interpretim kreativ që shpreh forcën, guximin dhe trashëgiminë tonë historike në mënyrë unike. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/skenderbeu-lufte-maic.png',
    ],
    alt: 'Maice "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_lufte_tshirt_021',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['skenderbeu', 'lufte', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'skenderbeu-lufte-hoodie',
    name: 'Duks "Skenderbeu Art"',
    slug: 'skenderbeu-lufte-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks premium me dizajn artistik të heroit kombëtar, Gjergj Kastrioti - Skënderbeu. Një interpretim kreativ që shpreh forcën, guximin dhe trashëgiminë tonë historike në mënyrë unike. I punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/skenderbeu-lufte-duks.png',
    ],
    alt: 'Duks Skenderbeu Lufte - Dizajn me Shqiponjën Shqiptare',
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
  }, {
    id: 'adem-jasha-t-shirt',
    name: 'Maice "Sakrifica"',
    slug: 'adem-jasha-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn të Adem Jasharit. Simbolizon sakrificën e familjes Jashari, si dhe të shumë trimave dhe trimëreshave të tjerë që ranë dëshmorë ndër vite. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/adem-jashari-maic.png',
    ],
    alt: 'Maice "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'adem_jashari_tshirt_023',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['adem', 'jasha', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'sakrifica-hoodie',
    name: 'Duks "Sakrifica"',
    slug: 'sakrifica-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks premium me dizajn të Adem Jasharit. Simbolizon sakrificën e familjes Jashari, si dhe të shumë trimave dhe trimëreshave të tjerë që ranë dëshmorë ndër vite. I punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/adem-jashari-duks.png',
    ],
    alt: 'Duks Adem Jashari - Dizajn me Shqiponjën Shqiptare',
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
  }, {
    id: 'skenderbeu-mozaik-t-shirt',
    name: 'Maice "Kurajo"',
    slug: 'skenderbeu-mozaik-t-shirt',
    price: 15.90,
    description: 'Maicë premium me dizajn të Skënderbeu-t në stilin mozaik. Një vlerësim i guximit dhe trashëgimisë sonë, i përpunuar në mënyrë artistike për një pamje unike dhe moderne. E punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/skenderbeu-art-maic.png',
    ],
    alt: 'Maice "Skenderbeu Lufte" - Dizajn me Shqiponjën Shqiptare',
    content_id: 'skenderbeu_mozai_tshirt_025',
    availability: 'in stock',
    condition: 'new',
    brand: 'Maica Etnike',
    googleProductCategory: 'Apparel & Accessories > Clothing > Shirts & Tops',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 't-shirt',
    tags: ['skenderbeu', 'mozai', 'albanian', 'classic', 'patriotic'],
    metaTitle: 'Maice "Step on shit" - Dizajn me Shqiponjën Shqiptare',
    metaDescription: 'Maice e thjeshtë dhe e fuqishme në ngjyrat kuq e zi shqiptare. E përkryer për mbështetësit patriotë.',
    metaKeywords: 'Autochtonus, shqiponja shqiptare, veshje patriotike, dizajn klasik'
  }, {
    id: 'skenderbeu-mozai-hoodie',
    name: 'Duks "Kurajo"',
    slug: 'skenderbeu-mozai-hoodie',
    comparePrice: 28.99,
    price: 25.90,
    description: 'Duks premium me dizajn të Skënderbeu-t në stilin mozaik. Një vlerësim i guximit dhe trashëgimisë sonë, i përpunuar në mënyrë artistike për një pamje unike dhe moderne. I punuar me materiale të cilësisë së lartë për rehati dhe qëndrueshmëri.',
    images: [
      '/images/Products/skenderbeu-art-duks.png',
    ],
    alt: 'Duks kurajo - Dizajn me Shqiponjën Shqiptare',
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
    link: `https://maicaetnike.shop/product/${product.slug}`,
    image_link: `https://maicaetnike.shop/${product.images[0]}`,
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