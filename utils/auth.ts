import type { NextApiResponse } from "next"
import jwt from "jsonwebtoken"
import { ExtendedNextApiRequestAuth, DecodedType, ResMessageType } from "./types"


const secret_key = "nextmarket"

const auth = (handler: Function) => {
    return async (req: ExtendedNextApiRequestAuth, res: NextApiResponse<ResMessageType>) => {
        if (req.method === "GET") {
            return handler(req, res)
        }

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRyYWdvbnByb2plY3QyMDAyQGdtYWlsLmNvbSIsImlhdCI6MTY5NTA3OTEzNSwiZXhwIjoxNjk1MTYxOTM1fQ.t8bD_Sqf1Lcyz5d8PLovysxEhTzI8DBQ75Bryh2k2EA"

        // const token = await req.headers.authorization.split(" ")[1]

        if (!token) {
            return res.status(401).json({ message: "トークンがありません" })
        }

        try {
            const decoded = jwt.verify(token, secret_key)
            // console.log(decoded)
            req.body.email = (decoded as DecodedType).email
            return handler(req, res)
        } catch (error) {
            return res.status(401).json({
                message: "トークンが正しくないので、ログインしてください"
            })
        }
    }
}

export default auth