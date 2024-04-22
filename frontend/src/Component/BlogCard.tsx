import { Link } from "react-router-dom"

interface Blogprops {
    title: string,
    content: string,
    author: string,
    PublishedDate: string,
    id : number

}



export const BlogCard = ({
    title,
    content,
    author,
    PublishedDate,
    id
}: Blogprops) => {

    return (
        <>
        <Link to={`/blog/:${id}`}>
        <div className="border-b border-slate-200 pb-4 pl-4 w-screen max-w-screen-md cursor-pointer">
                <div className="flex pt-2">

                    <div className="flex justify-center flex-col " >
                        <Avatar name={author} />
                    </div>
                    <div className="font-extralight pl-2 flex justify-center flex-col ">
                        {author}
                    </div>
                    <div className="flex justify-center flex-col pl-2 ">
                        <Circle />
                    </div>
                    <div className="font-thin text-slate-600 pl-2 flex justify-center flex-col">
                        {PublishedDate}
                    </div>

                </div>
                <div className="text-xl font-semibold pt-1 pb-2">
                    {title}
                </div>
                <div className="text-md font-thin pb-4">
                    {content.slice(0, 400) + "  ..."}
                </div>
                <div className="text-slate-500 font-thin text-sm">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
            
        </>
    )

}

export const Circle = () => {

    return <>
        <div className="h-1 w-1 rounded-full bg-slate-300">

        </div>
    </>
}


export const Avatar = ({ name  , size="big" }: { name: string , size? : "small" | "big" }) => {

    return (<>
        <div className={`relative inline-flex items-center justify-center ${size === "small"? "w-6 h-6": "w-10 h-10"} h-${size} overflow-hidden bg-blue-100 rounded-full dark:bg-blue-400`}>
            <span className={` ${size === "small"? "text-xs font-xs" : "text-md font-md"} test-center text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>
    </>)
}
