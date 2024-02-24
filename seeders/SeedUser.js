const SeedUser = async (prisma) => {
  const superAdmin = await prisma.user.create({
    data: require("../data/User.json"),
  });

  console.log("User seeded successfully:", superAdmin);
};

module.exports = SeedUser;
