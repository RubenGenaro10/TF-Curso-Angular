export class Usuario {
    id!:number;
    name!:string;
    username!:string;
    email!:string;
    address!:Address;
    phone!:string;
    website!:string;
    company!:Company;
}

class Address {
    street!:string;
    suite!:string;
    city!:string;
    zipcode!:string;
    geo!:Geo;
}
class Geo {
    lat!:string;
    lng!:string;
}
class Company {
    name!:string;
    catchPhrase!:string;
    bs!:string;
}