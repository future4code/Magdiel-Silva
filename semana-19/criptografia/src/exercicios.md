## EXERCICIO 1 ##

** A) Round é a quantidade de tempo que o Hash vai usar para realizar a criptografia. Salt é úm acrescimo de código criptografado adicionado ao código.

** B) 
import * as bcrypt from "bcryptjs";

const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
};

** C)
    const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
};

## EXERCICIO 2 ##

