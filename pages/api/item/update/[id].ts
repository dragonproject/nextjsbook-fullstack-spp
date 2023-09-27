import type { NextApiRequest, NextApiResponse } from "next"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"
import auth from "../../../../utils/auth"
import { ExtendedNextApiRequestItem, SavedItemDataType, ResMessageType } from "../../../../utils/types"

const updateItem = async (req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
    // console.log(req) // デバッグ用
    try {
        await connectDB()
        const singleItem: SavedItemDataType | null = await ItemModel.findById(req.query.id)
        if (!singleItem) return res.status(400).json({ message: "アイテムが存在してないため編集失敗" })
        if (singleItem.email === req.body.email) {
            await ItemModel.updateOne({ _id: req.query.id }, req.body)
            return res.status(200).json({ message: "アイテム編集成功" })
        } else {
            throw new Error()
        }
        await ItemModel.updateOne({ _id: req.query.id }, req.body)
        return res.status(200).json({ message: "アイテム更新成功" })
    } catch (error) {
        return res.status(400).json({ message: "アイテム更新失敗" })
    }
}

export default auth(updateItem)