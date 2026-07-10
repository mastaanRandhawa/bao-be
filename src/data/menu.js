// Native, responsive food & drink menu — the biggest UX/SEO win over the old PDFs.
// Dishes reflect Bao Bei classics; prices are illustrative for the prototype and
// should be synced with the current kitchen menu before launch.

export const foodMenu = [
  {
    id: 'to-start',
    title: 'To Start',
    items: [
      { name: 'Shao Bing', desc: 'Flaky sesame flatbread, cumin lamb', price: '16', tags: [] },
      { name: 'Peking Duck', desc: 'Steamed bao, hoisin, cucumber, scallion', price: '32', tags: [] },
      { name: 'Marinated Cucumbers', desc: 'Black vinegar, chili oil, garlic', price: '11', tags: ['vg'] },
      { name: 'Wonton in Chili Oil', desc: 'Pork & shrimp, Sichuan chili, peanut', price: '15', tags: [] },
    ],
  },
  {
    id: 'dumplings',
    title: 'Dumplings + Bao',
    items: [
      { name: 'Shanghai Xiao Long Bao', desc: 'Soup dumplings, black vinegar, ginger', price: '15', tags: [] },
      { name: 'Pork & Chive Dumplings', desc: 'Pan-fried, house chili oil', price: '14', tags: [] },
      { name: 'Mushroom Bao', desc: 'Steamed bun, hoisin, pickled daikon', price: '13', tags: ['vg'] },
    ],
  },
  {
    id: 'mains',
    title: 'Larger Plates',
    items: [
      { name: 'Kick Ass House Fried Rice', desc: 'Chinese sausage, egg, scallion', price: '18', tags: ['gfo', 'vgo'] },
      { name: 'Sticky Rice Cakes', desc: 'Shanghai style, pork, cabbage, wood ear', price: '19', tags: ['vgo'] },
      { name: 'Mapo Tofu', desc: 'Silken tofu, fermented bean, Sichuan pepper', price: '17', tags: [] },
      { name: 'Whole Fried Fish', desc: 'Market fish, ginger-scallion, chili', price: '38', tags: ['gf'] },
    ],
  },
  {
    id: 'greens',
    title: 'Greens',
    items: [
      { name: 'Seasonal Gai Lan', desc: 'Wok-tossed, garlic, oyster sauce', price: '14', tags: ['gfo', 'vgo'] },
      { name: 'Smashed Eggplant', desc: 'Black bean, chili, Thai basil', price: '15', tags: ['vg'] },
    ],
  },
  {
    id: 'sweet',
    title: 'Sweet',
    items: [
      { name: 'Black Sesame Ice Cream', desc: 'Toasted rice, honeycomb', price: '10', tags: ['v'] },
      { name: 'Fried Mantou', desc: 'Condensed milk, sea salt', price: '9', tags: ['v'] },
    ],
  },
];

export const drinkMenu = [
  {
    id: 'cocktails',
    title: 'Cocktails',
    items: [
      { name: 'Bao Bei Old Fashioned', desc: 'Rye, five-spice, orange bitters', price: '17' },
      { name: 'Lychee Martini', desc: 'Vodka, lychee, lime', price: '16' },
      { name: 'Osmanthus Spritz', desc: 'Sparkling wine, osmanthus, soda', price: '15' },
    ],
  },
  {
    id: 'low-no',
    title: 'Low & No',
    items: [
      { name: 'Salted Plum Soda', desc: 'Sour plum, soda, shiso', price: '8' },
      { name: 'Jasmine Iced Tea', desc: 'House-brewed, unsweetened', price: '6' },
    ],
  },
  {
    id: 'wine-beer',
    title: 'Wine + Beer',
    items: [
      { name: 'Riesling, by the glass', desc: 'Off-dry, Okanagan', price: '14' },
      { name: 'Tsingtao', desc: 'Lager, 330ml', price: '8' },
    ],
  },
];

// Legend for the dietary tags used above.
export const dietaryLegend = {
  v: 'Vegetarian',
  vg: 'Vegan',
  vgo: 'Vegan option',
  gf: 'Gluten-free',
  gfo: 'Gluten-free option',
};
