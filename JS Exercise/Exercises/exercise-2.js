const Information = {
  name: "Bibek Shyama",
  address: "Bkt",
  emails: "bibekshyama@gmail.com",
  interests: ["football", "coding", "gaming"],
  education: [
    {
      name: "E.G.P.S",
      enrolledDate: 2004,
    },
    {
      name: "S.S College",
      enrolledDate: 2016,
    },
    {
      name: "KhCE",
      enrolledDate: 2018,
    },
  ],
};

Information.education.forEach((value) => {
  console.log(`Name: ${value["name"]}
Enrolled-Date: ${value["enrolledDate"]}`);
});
