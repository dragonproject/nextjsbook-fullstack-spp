import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"
import auth from "../../../utils/auth"

const createItem = async (req, res) => {
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