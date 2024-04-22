import { Appbar } from "./Appbar";
import { Blog } from '../hooks/index'
import { Avatar } from "./BlogCard";

export const OneBlog = ({ blog }: { blog: Blog }) => {


    return (<>
        <div className="py-2">
            <Appbar />
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-12 py-12 pt-20 w-full max-w-screen-3xl">
                <div className="grid col-span-8 pr-4 ">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        published on 2nd February
                    </div>
                    <div className=" text-md pt-4">
                        {blog.content}
                    </div>

                </div>
                <div className="grid col-span-4 px-4">
                    <div className="text-slate-600 font-semibold pt-2 ">
                        Author
                    </div>

                    <div className="pt-4">
                        <div className="flex flex-cols ">
                            <div className="flex flex-col justify-center">
                                <Avatar size="small" name={blog.author.name || "anonymous"} />
                            </div>
                            <div className="text-xl font-bold pl-2">
                                {blog.author.name || "Anonymous"}
                            </div>

                        </div>
                        <div className="text-slate-500 pt-6">
                            this is to display the author description.

                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>

    )
}

{/* <div className="grid grid-cols-12 px-10 py-10 w-full">
<div className="grid span-col-8 ">
        hii there 
</div>
<div className="grid span-col-4 ">
        hii
</div>
</div> */}