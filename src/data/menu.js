// Native, responsive food & drink menu synced from bao-bei.ca (Feb 2025 food / May 2024 drinks).

export const foodMenu = [
  {
    id: 'schnacks',
    title: 'Schnacks',
    items: [
      { name: 'Assorted Seasonal Chinese Pickles', price: '9' },
      {
        name: 'Sichuan Smashed Cucumbers',
        desc: 'Mala soy vinaigrette',
        price: '9',
      },
      { name: 'Salted Napa Cabbage', desc: 'Sesame dressing', price: '9' },
      {
        name: 'Bean Curd Skin',
        desc: 'King oyster mushroom, chili ginger emulsion',
        price: '9',
      },
      {
        name: 'Crispy Tofu',
        desc: 'Garlic sweet soy, water chestnut',
        price: '9',
        tags: ['v'],
      },
      { name: 'Omelet', desc: 'Salted turnip and butter', price: '14' },
    ],
  },
  {
    id: 'petits-cadeaux',
    title: 'Petits Cadeaux',
    subtitle: 'Handmade by Helen Li',
    items: [
      { name: 'Vegetarian Potstickers', price: '16', tags: ['v'] },
      { name: 'Steamed Prawn, Scallop and Chive Dumplings', price: '18' },
      { name: 'Steamed Pork Dumplings', price: '18' },
      { name: 'Pork & Prawn Wonton Soup', price: '21' },
    ],
  },
  {
    id: 'petits-plats',
    title: 'Petits Plats Chinois',
    items: [
      {
        name: 'Beef Tartare',
        desc: 'Preserved mustard root, crispy shallot, ginger, quail egg, watercress, burnt scallion oil, taro chips. Add smoked bone marrow +15',
        price: '25',
      },
      {
        name: 'Shan Tofu',
        desc: "Chickpea tofu, Klipper's Organics greens, roasted squash, almond & garlic emulsion, roseheart apple",
        price: '24',
        tags: ['v'],
      },
      {
        name: 'Sichuan Fried Chicken',
        desc: 'Garlic mala oil, gochugaru, Thai basil',
        price: '23',
      },
      {
        name: 'Mantou Buns',
        desc: '48 hour Brant Lake wagyu short rib, Vietnamese mint & cilantro, pickled daikon, chili',
        price: '20',
      },
      {
        name: 'Shao Bing',
        desc: 'Sesame flatbread, Opal Valley cumin marinated lamb leg, cilantro, green pepper, pickled red onion, salted serrano',
        price: '24',
      },
      {
        name: 'Sablefish',
        desc: 'Cilantro & basil pistou, Pixian douban glaze',
        price: '42',
      },
      {
        name: 'Pork Belly',
        desc: 'Vietnamese cilantro sauce, triple cooked potato, cucumber, mint, pickled ginger & ramps',
        price: '35',
      },
      {
        name: 'Kick Ass House Fried Rice',
        desc: 'Oyakodon style, chicken thigh, dashi sabayon, sliced onion, crispy chicken skin',
        price: '26',
      },
      {
        name: 'Sticky Rice Cakes',
        desc: 'Duck confit, preserved chili, yellow chives, woodear mushroom, Taiwanese cabbage. Add sunnyside up egg +3.75, add omelet +14',
        price: '28',
      },
    ],
  },
  {
    id: 'vegetables',
    title: 'Vegetables',
    items: [
      { name: 'King Pea Tips', desc: 'Garlic, shaoxing', price: '16' },
      {
        name: 'Glazed Crispy Eggplant',
        desc: 'Gochugaru leek & carrot, sesame salt',
        price: '16',
        tags: ['v'],
      },
    ],
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { name: 'Steamed Rice', price: '3.5' },
      { name: 'Sunnyside Up Free Range Egg', price: '3.75' },
      { name: 'Smoked Bone Marrow', price: '15' },
    ],
  },
  {
    id: 'chefs-choice',
    title: "Chef's Choice",
    items: [
      {
        name: "Chef's Choice",
        desc: 'Allow us to create a meal for you. Ask about drink pairings & add-ons. Full table participation required.',
        price: '75+',
      },
    ],
  },
];

export const drinkMenu = [
  {
    id: 'cocktails',
    title: 'Cocktails',
    subtitle: '2oz',
    items: [
      {
        name: 'Spring Fling',
        desc: 'Pomelo infused Roku gin, Cocchi Americano, Woods amaro chiaro, sakura, lemon',
        price: '19',
      },
      {
        name: 'Jade Slipper',
        desc: 'Cucumber shochu, Cointreau, Midori, lemon. Contains white soy',
        price: '18',
      },
      {
        name: 'Salted Sun',
        desc: 'Nikka Days whiskey, Nutty Solera sherry, sesame overproof rum, miso burnt caramel. Clarified with milk',
        price: '21',
      },
      {
        name: 'Kaizen Martini',
        desc: 'Nikka vodka, Esquimalt dry vermouth, kombu, bonito. Contains fish',
        price: '20',
      },
      {
        name: 'Best of the "50 Best"',
        desc: "Rotating cocktails from New York City's Bar Madonna, Martiny's, and Overstory. Ask your server",
        price: '18',
      },
      {
        name: 'Chino Margarita',
        desc: 'Dried tangerine peel infused reposado tequila, ginger, lime, egg white, chili salt & sugar rim',
        price: '21',
      },
      {
        name: 'Piña Colada',
        desc: "The best frozen sissy drink you'll ever have",
        price: '22',
      },
      {
        name: 'Nâa Rón Spritz',
        desc: 'Gewurztraminer, lime leaf Grey Goose vodka, sparkling wine, osmanthus, soda',
        price: '18',
      },
    ],
  },
  {
    id: 'beer',
    title: 'Beer',
    items: [
      { name: 'Tsingtao', desc: 'Lager, 640ml, Qingdao, China', price: '14' },
      { name: 'Bao Bei & Slowhand', desc: 'Helles lager, 355ml, Vancouver, BC', price: '8' },
      {
        name: 'Beere',
        desc: "'Go Easy' dry hopped pale ale, 473ml, Vancouver, BC",
        price: '9',
      },
      {
        name: 'Superflux',
        desc: "'Happyness' IPA, 473ml, Vancouver, BC",
        price: '9',
      },
      {
        name: '33 Acres',
        desc: "'California Common' amber lager, 330ml, Vancouver, BC",
        price: '9',
      },
    ],
  },
  {
    id: 'sake',
    title: 'Sake',
    items: [
      {
        name: 'Heiwa Shuzo KID Red Rice',
        desc: 'Velvety & round with aromas of honey, cherries and umeshu',
        price: '14 / 40 / 90',
      },
      {
        name: 'Toyobijin Junmai Ginjo',
        desc: 'Floral & fruity; lush tones with a depth of umami',
        price: '45',
      },
      {
        name: 'Sohomare Yumesasara Junmai',
        desc: 'Light dry and fresh, earthy with a touch of acidity',
        price: '14 / 40 / 90',
      },
      {
        name: 'Niida Honke Shizenshu Genshu',
        desc: 'Bold, savoury sweetness; sharp finish',
        price: '14 / 40 / 90',
      },
      {
        name: 'Hanatomoe Yodan Genshu',
        desc: 'Aromas of mango, rich and bold, balanced acidity',
        price: '14 / 40 / 90',
      },
    ],
  },
  {
    id: 'zero-proof',
    title: 'Zero Proof',
    items: [
      { name: 'Melon Tea', desc: 'Honeydew melon, milky oolong tea, lemon', price: '9' },
      {
        name: 'Fenghuang',
        desc: 'Lumette rum, NOA non-alcoholic bitter, tapache, orange juice',
        price: '15',
      },
      {
        name: 'No Fashioned',
        desc: 'Lumette rum, NOA non-alcoholic bitter, NOA non-alcoholic red vermouth, thai tea, lapsang tea, miso burnt caramel',
        price: '15',
      },
      { name: 'Baku', desc: 'Cold brew coffee, ginger syrup, tonic water', price: '9' },
      { name: "Dickie's Ginger Beer", price: '5' },
      { name: 'Zamalek Sparkling Hibiscus Tea', price: '5' },
      { name: 'Herbal Iced Tea', price: '4' },
    ],
  },
  {
    id: 'cider',
    title: 'Cider',
    items: [
      {
        name: 'Dominion Cider',
        desc: "'First Principles', 473ml, Summerland, BC",
        price: '10',
      },
      { name: 'Sunday Cider', desc: 'Rosé, 355ml, Sunshine Coast, BC', price: '8' },
    ],
  },
  {
    id: 'non-alcoholic-beer',
    title: 'Non-Alcoholic Beer',
    items: [
      { name: 'Nonny', desc: 'Czech pilsner, 355ml, Vancouver, BC', price: '6' },
      { name: 'Strange Fellows', desc: 'India pale ale, 355ml, Vancouver, BC', price: '6' },
    ],
  },
  {
    id: 'non-alcoholic-cider',
    title: 'Non-Alcoholic Cider',
    items: [
      {
        name: 'Meadows',
        desc: '0.5% ABV, Dominion Cider X Pamplemousse Jus, 750ml, Summerland, BC',
        price: '7 / 35',
      },
    ],
  },
  {
    id: 'wine',
    title: 'Wine',
    subtitle: '5oz / 500ml / 750ml',
    items: [
      {
        name: "Averill Creek NV 'Charm De L'ile'",
        desc: 'Pinot Noir/Pinot Gris — Duncan, BC. Apricots, apple and pear; crisp and lively',
        price: '14 / 70',
      },
      {
        name: "Natte Valleij 'Axle' 2024",
        desc: 'Chenin Blanc — Stellenbosch, South Africa. Ripe spiced stone fruits; balanced with delicate acidity',
        price: '17 / 57 / 85',
      },
      {
        name: "Pascal Jolivet 2024 'Attitude'",
        desc: 'Sauvignon Blanc — Loire Valley, France. Green apple and kiwi; elegant with a long finish',
        price: '16 / 54 / 80',
      },
      {
        name: "Tantalus 2025 'Bear'",
        desc: 'Chardonnay — OK Valley, BC. Peach, honeydew, lemon curd; slightly creamy yet crisp',
        price: '75',
      },
      {
        name: "Cirelli 2024 'Cerasuolo d'Abruzzo'",
        desc: 'Montepulciano — Abruzzo, Italy. Red currant, raspberry and hibiscus; long structured finish',
        price: '17 / 57 / 85',
      },
      {
        name: "A Sunday in August 2025 'Carbonic Orange'",
        desc: 'Gewurztraminer/Riesling/Muscat/Pinot Blanc — OK Valley, BC. Jasmine flowers, tangerine and tropical fruit; fresh and tangy',
        price: '15 / 50 / 75',
      },
      {
        name: "Jean Foillard 2023 'Morgon'",
        desc: 'Gamay — Beaujolais, France. Black cherry and peony plum; full, extended finish',
        price: '100',
      },
      {
        name: "Frasca 2021 'La Guaragna'",
        desc: "Barbera — D'Asti, Italy. Plum, violet and spice; soft tannins; tart finish",
        price: '80',
      },
      {
        name: 'Scout 2022',
        desc: 'Syrah — Cawston, BC. Juicy black currant, dark cherry; bright and zesty',
        price: '18 / 60 / 90',
      },
      {
        name: "Ursa Major x Bella 2025 'Ode to Sappho'",
        desc: 'Marechal Foch — Naramata, BC. Red licorice, cranberry and cherry; lambrusco meets BC',
        price: '70',
      },
      {
        name: "Synchromesh 2025 'Stormhaven Dry'",
        desc: 'Riesling — OK Falls, BC. Pear, honeysuckle, slate and tightly wound finish',
        price: '75',
      },
      {
        name: "Geographic Wines 2024 'Landcraft Loureiro'",
        desc: 'Loureiro — Vinho Verde, Portugal. Orange blossom and fresh herbs; mineral driven and crisp',
        price: '85',
      },
      {
        name: "Koppitsch 2023 'Perspektive Weiss'",
        desc: 'Chardonnay/Pinot Blanc — Burgenland, Austria. Mango and poached pear; luscious with limestone minerality',
        price: '90',
      },
      {
        name: "Troupis 2024 'Ekato 100 Days'",
        desc: 'Moschofilero — Litharakia, Greece. Rose petals and quince jam; hint of tannin with balanced acidity',
        price: '85',
      },
      {
        name: "Palavani 2022 'Amber'",
        desc: 'Kisi — Kakheti, Georgia. Orange peel, wildflowers and honeycomb; smooth and creamy',
        price: '90',
      },
      {
        name: "Klaus Preisinger 2023 'Puszta Libre!'",
        desc: 'Zweigelt/Saint Laurent — Burgenland, Austria. Red currant and sour cherry; chilled and easy',
        price: '16 / 54 / 80',
      },
      {
        name: "Koerner 2020 'Classico'",
        desc: 'Cabernet Sauvignon/Malbec — Clare Valley, Australia. Plum, sage and leather; refined tannins with medium weight',
        price: '90',
      },
      {
        name: "Echo Bay 2022 'Synoptic'",
        desc: 'Cabernet Franc/Merlot/Cabernet Sauvignon — OK Falls, BC. Cherry, raspberry and tobacco; spicy palate elegantly extended',
        price: '95',
      },
    ],
  },
];

export const dietaryLegend = {
  v: 'Vegetarian',
  vg: 'Vegan',
  vgo: 'Vegan option',
  gf: 'Gluten-free',
  gfo: 'Gluten-free option',
};

export const menuNotes = {
  food: [
    '20% gratuity will be added to parties of 6 or more.',
    'Due to our menu style we are unable to offer modifications.',
    "Chef's Choice starts at $75/person with a minimum of 2 people.",
  ],
  drinks: ['Prices do not include taxes.'],
};
