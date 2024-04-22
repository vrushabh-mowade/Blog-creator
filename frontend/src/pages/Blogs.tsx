import { Appbar } from "../Component/Appbar"
import { BlogCard } from "../Component/BlogCard"
import { BlogsPageSkeleton } from "../Component/Skeletons";
import {  useBlogs } from "../hooks"



export const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if (loading) {//need to work
        return (<div>
            <BlogsPageSkeleton/>
        </div>)
    }
    

    return <>
        <div>
            <div className=" ">
                <Appbar />
            </div>
            <div >
                <div className="flex justify-center flex-col">
                        {blogs.map(blog => ( <BlogCard
                            id={blog.id} 
                            title={blog.title}
                            PublishedDate={"2nd February"}
                            content={blog.content} 
                            author={blog.author.name  || " blog "} 
                            />))}
                    
                </div>
            </div>
        </div>
    </>

}