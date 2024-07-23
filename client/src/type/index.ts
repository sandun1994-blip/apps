import { Customer } from "@/schemas";

export interface CustomerWithID extends Customer {
    id?:string
}