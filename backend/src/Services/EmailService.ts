interface IMailTo {
    name: string;
    email: string;
}

interface IMailMessage{
    subject : string;
    body: string;
    attachment ?: string[];
}

interface IMessageDTO{ //Data Transfer Object(DDD)
    to: IMailTo,
    message: IMailMessage
}

interface IEmailService{
    sendMail(request: IMessageDTO) : void;
}

class EmailService implements IEmailService{
    sendMail({to , message} : IMessageDTO){
        console.log(`Email enviado para ${to.email} : ${message.subject}`);
    }
}

export default EmailService;