export interface Payment{
    ID?:number,
    customerID:number;
    price:number;
    creditCardNumber:string;
    expirationDate:string;
    securityCode:string;
}