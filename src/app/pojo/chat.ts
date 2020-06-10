export interface Members {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | undefined;
    ip: string;
}

export interface Messages {
    id: string;
    userId: string;
    message: string;
    timestamp: Date;
}

export class MemberHash {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string | undefined;
    constructor(item: Members) {
        this.firstName = item.firstName;
        this.lastName = item.lastName;
        this.email = item.email;
        this.avatar = item.avatar;
    }
}

export interface ChatList {
    messageId: string;
    userId: string;
    fullName: string;
    timestamp: Date;
    email: string;
    message: string;
    avatar?: any;
}