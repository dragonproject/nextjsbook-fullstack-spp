import Link from "next/link"
import Image from "next/image"
const ReadAllItems = (props) => {
    return (
        <div>
            <div>
                {props.allItems.map((item) =>
                    <Link href="" key={item._id}>
                        <a>
                            <Image src={item.image} width="750px" height="500px" alt="item-image" />
                            <div>
                                <h2>¥{item.price}</h2>
                                <h3>{item.title}</h3>
                                <p>{item.description.substring(0, 80)}...</p>
                            </div>
                        </a>
                    </Link>
                )}
            </div>
        </div>
    )
}
export default ReadAllItems
