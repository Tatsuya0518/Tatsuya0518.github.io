document.addEventListener("DOMContentLoaded", function() {
  const ramenList = [
    "豚骨ラーメン",
    "醤油ラーメン",
    "味噌ラーメン",
    "塩ラーメン",
    "つけ麺",
    "博多ラーメン",
    "札幌ラーメン",
    "東京ラーメン",
    "熊本ラーメン",
    "鹿児島ラーメン",
    "担々麺",
    "冷やし中華",
    "Tonkotsu Ramen",
    "Shoyu Ramen",
    "Miso Ramen",
    "Shio Ramen",
    "Tsukemen",
    "Hakata Ramen",
    "Sapporo Ramen",
    "Tokyo Ramen",
    "Kumamoto Ramen",
    "Kagoshima Ramen",
    "Tantanmen",
    "Hiyashi Chuka"
  ];

  const input = document.getElementById("autocomplete");
  new Awesomplete(input, {
    list: ramenList
  });
});
