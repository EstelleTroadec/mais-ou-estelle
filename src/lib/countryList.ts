const continentCountryMap = {
  "Amérique du Nord": [
    { name: "Canada", link: "/countries/canada" },
    { name: "États-Unis", link: "/countries/etats-unis" },
    { name: "Mexique", link: "/countries/mexique" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "Amérique Centrale & Caraïbes": [
    { name: "Costa Rica", link: "/countries/costa-rica" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
  "Amérique du Sud": [
    /* { name: "Brésil", link: "/countries/bresil" }, */
    { name: "Colombie", link: "/countries/colombie" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
  /* "Europe": [
    { name: "France", link: "/countries/france" },
    { name: "Espagne", link: "/countries/espagne" }
  ].sort((a, b) => a.name.localeCompare(b.name)), */
  /* "Asie": [
    { name: "Thailande", link: "/countries/thailande" },
    { name: "Singapour", link: "/countries/singapour" },
    { name: "Malaisie", link: "/countries/malaisie" },
    { name: "Bali", link: "/countries/bali" }
  ].sort((a, b) => a.name.localeCompare(b.name)), */
  "Océanie": [
    { name: "Polynésie Française", link: "/countries/polynesie-francaise" }
  ].sort((a, b) => a.name.localeCompare(b.name)),
};

export { continentCountryMap };