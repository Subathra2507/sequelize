export interface InterfaceUser{
    id: number,
    name: string,
    address: string
}

export interface InterfaceUser2{
    //id: number,
    name: string,
    address: string
   update: (id: Partial<InterfaceUser2>) => Promise<any>;
}

