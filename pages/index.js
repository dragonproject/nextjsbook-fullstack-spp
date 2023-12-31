import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const ReadAllItems = (props) => {
    return (
        <div>
            <Head>
                <title>Next Market</title>
            </Head>
            <div className="grid-container-in">
                {itemData && itemData.allItems.map((item) => (
                    <Link
                        className="card"
                        href={`/item/${item._id}`}
                        key={item._id}
                    >
                        <Image
                            src={item.image}
                            width={750}
                            height={500}
                            alt="item-image"
                            layout="intrinsic"
                        />
                        <div className="texts-area">
                            <h2>¥{item.price}</h2>
                            <h3>{item.title}</h3>
                            <p>{item.description.substring(0, 80)}...</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ReadAllItems

// export const getServerSideProps = async () => {
//     const response = await fetch(
//         "https://nextjsbook-fullstack-spp.vercel.app/api/item/readall"
//     )
//     const allItems = await response.json()

//     return {
//         props: allItems
//     }
// }
