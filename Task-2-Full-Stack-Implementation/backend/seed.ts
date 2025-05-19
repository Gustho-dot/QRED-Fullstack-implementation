import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function seed() {
  try {
    const company = await prisma.company.create({
      data: {
        name: 'Company AB',
      },
    });

    const card = await prisma.card.create({
      data: {
        companyId: company.id,
        remainingSpend: 540000,
        limit: 1000000,
        invoiceDueDate: new Date('2025-05-20T00:00:00.000Z'),
        active: true,
      },
    });

    await prisma.transaction.createMany({
      data: [
        {
          cardId: card.id,
          description: 'Coffee Shop',
          amount: 550,
          createdAt: new Date('2025-05-10T08:00:00.000Z'),
        },
        {
          cardId: card.id,
          description: 'Office Supplies',
          amount: 12000,
          createdAt: new Date('2025-05-11T14:30:00.000Z'),
        },
        {
          cardId: card.id,
          description: 'Client Lunch',
          amount: 25000,
          createdAt: new Date('2025-05-12T12:00:00.000Z'),
        },
      ],
    });

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();