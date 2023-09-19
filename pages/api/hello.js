// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (req, res) => {
  return res.status(200).json({ message: "こんにちは" })
}

export default hello