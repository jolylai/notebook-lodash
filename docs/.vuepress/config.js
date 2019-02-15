module.exports = {
  base: "/notebook-js/",
  themeConfig: {
    nav: [
      {
        text: "Lodash",
        link: "/lodash/"
      }
    ],
    sidebar: {
      "/lodash/": getLodashSiderBar()
    }
  }
};
function getLodashSiderBar() {
  return [
    {
      title: "Lodash",
      collapsable: false,
      children: [""]
    },
    {
      title: "internal",
      collapsable: false,
      children: [
        "baseWhile",
        "isStrictComparable",
        "getMatchData",
        "stack",
        "baseIsEqual",
        "baseMatches"
      ]
    },
    {
      title: "Array",
      collapsable: false,
      children: ["drop", "dropRight", "dropRightWhile", "dropWhile", "slice"]
    },
    {
      title: "Lang",
      collapsable: false,
      children: ["isObject"]
    },
    {
      title: "Util",
      collapsable: false,
      children: ["matches"]
    }
  ];
}
