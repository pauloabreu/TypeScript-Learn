import { Request, Response } from "express";
import EmailService from "../Services/EmailService";


const users = [
    {"name": "Paulo", "email": "pauloabreucoder@gmail.com"}   
];

export default {
    async index(req : Request, res : Response){
        return res.json(users);
    },

    async create(req: Request, res : Response){
        const emailService = new EmailService();
        emailService.sendMail({
            to: {
                name: "Paulo",
                email:"pauloabreucoder@gmail.com"
            },
            message: {
                subject: "Bem-Vindo ao sistema",
                body: "Seja Bem-vindo."
            }
        });

        return res.send();
    }
};