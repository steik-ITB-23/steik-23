const { PrismaClient } = require("@prisma/client");
const SeedUser = require("./SeedUser");
const prisma = new PrismaClient();

// Your seeding logic here

async function main() {
  // Your seeding logic here
  await SeedUser(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
