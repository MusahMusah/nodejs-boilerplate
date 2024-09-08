import bcrypt from "bcrypt";

export class Password {
    static hash(password: string) {
        return bcrypt.hashSync(password, 10);
    }

    static verify(hashString: string, password: string) {
        return bcrypt.compareSync(password, hashString);
    }
}
