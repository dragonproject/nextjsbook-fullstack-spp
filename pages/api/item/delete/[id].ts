import type { NextApiResponse } from "next"
import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"
import auth from "../../../../utils/auth"
import { ExtendedNextApiRequestItem, SavedItemDataType, ResMessageType } from "../../../../utils/types"

const deleteItem = async (req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
    try {
        await connectDB()
        const singleItem = await ItemModel.findById(req.query.id)
        if (singleItem.email === req.body.email) {
            await ItemModel.deleteOne({ _id: req.query.id })
            return res.status(200).json({ message: "アイテム削除成功" })
        } else {
            throw new Error()
        }
        await ItemModel.deleteOne({ _id: req.query.id })
        return res.status(200).json({ message: "アイテム削除成功" })
    } catch (err) {
        return res.status(400).json({ message: "アイテム削除失敗" })
    }
}

export default auth(deleteItem)