let currentSession = JSON.parse(sessionStorage.getItem("dataObject"));

let inputdate = currentSession.inputdate;
console.log(inputdate);

let chineseZodiac = {
  rat1: {
    years: [1948, 1960, 1972, 1984, 1996, 2008, 2020, 2032],
    quote:
      "Rat's gifts to the world are great intelligence and building wealth",
    imgSrc: "images//rat.jpg.png",
  },
  ox1: {
    years: [1949, 1961, 1973, 1985, 1997, 2009, 2021, 2033],
    quote:
      " Ox's auspicious gifts are strength of character and unwavering determination.",
    imgSrc: "images//ox-removebg-preview.png",
  },
  tiger1: {
    years: [1950, 1962, 1974, 1986, 1998, 2010, 2022, 2034],
    quote: "Tiger gifst the world with unparalleled enthusiasm for life.",
    imgSrc: "images//tiger-removebg-preview.png",
  },
  rabbit1: {
    years: [1951, 1963, 1975, 1987, 1999, 2011, 2023, 2035],
    quote:
      "Rabbit's auspicious gifts are manifesting prosperity and making peace.",
    imgSrc: "images//rabbit-removebg-preview.png",
  },
  dragon1: {
    years: [1952, 1964, 1976, 1988, 2000, 2012, 2024, 2036],
    quote: "Dragon gifts the world with noble actions and ancient wisdom.",
    imgSrc: "images//dragon-removebg-preview.png",
  },
  snake1: {
    years: [1953, 1965, 1977, 1989, 2001, 2013, 2025, 2037],
    quote:
      "Snake's auspicious gifts are primordial wisdom and mystical abilities.",
    imgSrc: "images//snake-removebg-preview.png",
  },
  horse1: {
    years: [1954, 1966, 1978, 1990, 2002, 2014, 2026, 2038],
    quote: "Horse gifts the world with true freedom of mind body and spirit",
    imgSrc: "images//horse-removebg-preview.png",
  },
  goat1: {
    years: [1955, 1967, 1979, 1991, 2003, 2015, 2027, 2039],
    quote:
      " Goat gifts the world with their selfless, humanitarian thoughts and deeds.",
    imgSrc: "images//goat-removebg-preview.png",
  },
  monkey1: {
    years: [1956, 1968, 1980, 1992, 2004, 2016, 2028, 2040],
    quote:
      "Monkey's auspicious gifts are terrific humor and highly developed sense of self.",
    imgSrc: "images//monkey-removebg-preview.png",
  },
  rooster1: {
    years: [1957, 1969, 1981, 1993, 2005, 2017, 2029, 2041],
    quote:
      "Rooster's auspicious gifts are forward thinking and solid self-confidence",
    imgSrc: "images//rooster-removebg-preview.png",
  },
  dog1: {
    years: [1958, 1970, 1982, 1994, 2006, 2018, 2030, 2042],
    quote:
      "Dog's auspicious gifts are unconditional love and loyalty to all living things.",
    imgSrc: "images//dog-removebg-preview.png",
  },

  pig1: {
    years: [1959, 1971, 1983, 1995, 2007, 2019, 2031, 2043],
    quote: "Pig auspicious gifts are generosity and kindness.",
    imgSrc: "images//pig-removebg-preview.png",
  },
};

const getZodiac = (inputdate) => {
  let zodiac = "";
  for (let key in chineseZodiac) {
    if (chineseZodiac[key].years.includes(parseInt(inputdate))) {
      zodiac = chineseZodiac[key];
    }
  }
  return zodiac;
};
console.log(getZodiac(inputdate));

const currentZodiac = getZodiac(inputdate);
document.getElementById("age").innerHTML = age;
document.getElementById("images").src = "../template/save.png";
document.getElementById("quotes").innerHTML = currentZodiac.quote;
document.getElementById("zodiacimg").src = currentZodiac.imgSrc;
