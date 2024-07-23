import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dtos/customer.dto';
import { Customer } from '@prisma/client';

describe('CustomerController', () => {
  let controller: CustomerController;
  let service: CustomerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [
        {
          provide: CustomerService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a customer', async () => {
      const createCustomerDto: CreateCustomerDto = {
        firstName: 'sandun',
        lastName: 'tharuka',
        email: 'sandun@gmail.com',
      };
      const result: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'tharuka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createCustomerDto)).toBe(result);
    });
  });
  describe('findAll', () => {
    it('should return an array of customers', async () => {
      const result: Customer[] = [
        {
          id: 'id_one',
          firstName: 'sandun',
          lastName: 'tharuka',
          email: 'sandun@gmail.com',
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a single customer', async () => {
      const result: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'tharuka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a customer', async () => {
      const updateCustomerDto: UpdateCustomerDto = {
        firstName: 'sandun',
        lastName: 'senanayaka',
        email: 'sandun@gmail.com',
      };
      const result: Customer = {
        id: 'id_one',
        firstName: 'sandun',
        lastName: 'senanayaka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(service, 'update').mockResolvedValue(result);

      expect(await controller.update('id_one', updateCustomerDto)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a customer', async () => {
      const result: Customer = {
        id: 'id_my',
        firstName: 'sandun',
        lastName: 'tharuka',
        email: 'sandun@gmail.com',
      };
      jest.spyOn(service, 'remove').mockResolvedValue(result);

      expect(await controller.remove('id_my')).toBe(result);
    });
  });
});
