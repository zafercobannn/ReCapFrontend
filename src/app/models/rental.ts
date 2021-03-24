export interface Rental{
    ID?:number,
    carID:number;
    customerID:number;
    rentDate:Date;
    returnDate?:Date;
    price?:number;
}