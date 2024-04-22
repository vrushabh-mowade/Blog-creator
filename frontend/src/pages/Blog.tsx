import { NotFound } from "../Component/NotFound";
import { OneBlogPage } from "../Component/Skeletons";
import { OneBlog } from "../Component/oneBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";


export const Blog = () => {
    const { id } = useParams();

    const { loading, blog } = useBlog({
        id: Number(id || "")
    });

    if (loading) {
        return <>
            <div>
                <OneBlogPage/>
            </div>
        </>
    }
    if(blog == undefined){
        return(<>
        <NotFound/>
        </>)
    }

    return <>
        <div>
            <OneBlog blog={blog} />
        </div>
    </>
}