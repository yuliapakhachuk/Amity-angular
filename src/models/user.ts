export type UserRole = "administrator" | "supervisor" | "coordinator" | "observer" | "resident"; 

export interface Building {
    name: string,
    address: string,
    state: string,
    coordinatorId: number, ///????
    safetyOn: boolean,
}
export interface User {
    id: number,
    firstName: string,
    lastName: string,
    role: UserRole,
    email: string,
    phone: string,
    avatarUrl?: string,
    property?: string,
}

export interface Community {
    id: number,
    name: string,
    state: string,
    address: string,
    zipCode: string,
    contactData: string,
    safetyOn: boolean,   
    description?: string,
    image?: string,
    supervisor?: User,  //??? supervisorId: number ///???
    buildings?: Building[],
    membersId?: number[]  ///??? buildingsId?: number[]
    //history ?????
}