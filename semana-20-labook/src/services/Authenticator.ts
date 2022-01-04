import { sign } from "crypto"
import { authenticationData } from "../model/User"

export class Authenticator {
    generateToken = (
        payload: authenticationData
    ) => {
        return sign(
            payload,
            process.env.JWT_KEY as string,{
                expiresIn:"12h"
            }
        )

    }
    getTokenData = () => {

    }
}