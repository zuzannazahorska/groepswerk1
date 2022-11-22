let session = JSON.parse(sessionStorage.getItem(""));

let chineseZodiac = {
  rat1: [1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
  ox1: [1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
  tiger1: [1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
  rabbit1: [1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035],
  dragon1: [1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036],
  snake1: [1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
  horse1: [1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038],
  goat1: [1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039],
  monkey1: [1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040],
  rooster1: [1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041],
  dog1: [1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042],
  pig1: [1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043],
};

const getZodiac = (inputdate) => {
  let zodiac = "";
  for (let key in getZodiac) {
    if (chineseZodiac[key].inlcludes(parseInt(inputdate))) {
      zodiac = key;
    }
  }
  return zodiac;
};

console.log(getZodiac(session.inputdate));

let images = {
  rat1: [(src = "images//rat.jpg.png")],
  ox1: [(src = "images//ox-removebg-preview.png")],
  tiger1: [(src = "images//tiger-removebg-preview.png")],
  rabbit1: [(src = "images//rabbit-removebg-preview.png")],
  dragon1: [(src = "images//dragon-removebg-preview.png")],
  snake1: [(src = "images//snake-removebg-preview.png")],
  horse1: [(src = "images//horse-removebg-preview.png")],
  goat1: [(src = "images//goat-removebg-preview.png")],
  monkey1: [(src = "images//monkey-removebg-preview.png")],
  rooster1: [(src = "images//rooster-removebg-preview.png")],
  dog1: [(src = "images//dog-removebg-preview.png")],
  pig1: [(src = "images//pig-removebg-preview.png")],
};

const getImages = (inputdate) => {
  let images = "";
  for (let key in getImages) {
    if (images[key].inlcludes(parseInt(inputdate))) {
      images = key;
    }
  }
  return images;
};

console.log(getImages(session.inputdate));

let allquotes = document.getElementById("quotes");
s;
