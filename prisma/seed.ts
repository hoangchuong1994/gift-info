import { PrismaClient } from '@prisma/client';
import { listColors } from '../data/placeholder';
const prisma = new PrismaClient();
async function main() {
    for (const color of listColors) {
        await prisma.color.create({
            data: color,
        });
    }
    console.log('Seed data created successfully!');
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
