export type argProps = {
    template: string,
    data: any,
}

export interface IEmail {
    to: string | string[],
    subject: string,
    template: IEmailTemplate,
    data: any
    userId?: string
    message?: string
}

export interface IToEmail {
    email: string,
    name: string
}

export enum IEmailTemplate {
    TEST= 'temp',
}

export interface INotify {
    subject: string,
    data: any,
    template: IEmailTemplate,
}

export interface IToEmail {
    email: string,
    name: string
}

export interface IAccountActivation {
    otp: string,
    name: string
}