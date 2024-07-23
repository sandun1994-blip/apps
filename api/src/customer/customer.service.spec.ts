import { Customer } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerService } from './customer.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('CustomerService', () => {
  let service: CustomerService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CustomerService,
        {
          provide: PrismaService,
          useValue: {
            customer: {
              findMany: jest.fn(),
              create: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const customer: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'Tharuka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(prismaService.customer, 'create').mockResolvedValue(customer);

      expect(await service.create(customer)).toBe(customer);
    });
  });

  describe('findAll', () => {
    it('should return an array of customers', async () => {
      const customers: Customer[] = [
        {
          id: 'id_one',
          firstName: 'sandun',
          lastName: 'Tharuka',
          email: 'sandun@gmail.com',
        },
      ];
      jest
        .spyOn(prismaService.customer, 'findMany')
        .mockResolvedValue(customers);

      expect(await service.findAll()).toBe(customers);
    });
  });

  describe('findOne', () => {
    it('should return a single customer', async () => {
      const customer: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'Tharuka',
        email: 'sandun@gmail.com',
      };
      jest
        .spyOn(prismaService.customer, 'findUnique')
        .mockResolvedValue(customer);

      expect(await service.findOne('id_one')).toBe(customer);
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const customer: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'Tharuka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(prismaService.customer, 'update').mockResolvedValue(customer);

      expect(await service.update('id_one', customer)).toBe(customer);
    });
  });

  describe('remove', () => {
    it('should remove a customer', async () => {
      const customer: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'Tharuka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(prismaService.customer, 'delete').mockResolvedValue(customer);

      expect(await service.remove('id_one')).toBe(customer);
    });
  });
});
