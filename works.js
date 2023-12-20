document.addEventListener("DOMContentLoaded", function() {
  const ramenList = [
    "CCA-I-01",
    "CCA-I-02",
    "CCA-I-03",
    "CCA-I-04",
    "HNY-I-01",
    "HNY-I-02",
    "HNY-I-03",
    "FLV-I-01",
    "FLV-I-02",
    "FLV-I-03",
    "MPL-I-01",
    "MPL-I-02",
    "MPL-I-03",
    "TRT-I-01",
    "TRT-I-02",
    "TRT-I-03"
  ];

  const input = document.getElementById("autocomplete");
  new Awesomplete(input, {
    list: ramenList
  });
});
