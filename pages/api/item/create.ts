import type { NextApiResponse } from "next"
import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"
import { ExtendedNextApiRequestItem, ResMessageType } from "../../../utils/types"

const createItem = async (req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
    try {
        await connectDB()
        // console.log(req.body)
        ItemModel.create(req.body) // 追加
        return res.status(200).json({ message: "アイテム作成に成功" })
    } catch (err) {
        return res.status(400).json({ message: "アイテム作成に失敗" })
        // console.log(err)
    }
}

export default auth(createItem)