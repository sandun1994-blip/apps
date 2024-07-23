import { z } from "zod";


export const CustomerSchema =z.object({
    email: z.string().email({message:'Email is required'}),
    firstName:z.string().min(1,{message:"First Name is required"}),
    lastName:z.string().min(1,{message:"Last Name is required"}),
    
})

export type Customer=z.infer<typeof CustomerSchema>

export const defaultCustomerData = {
  email: '',
  firstName:'',
  lastName: ''
}
