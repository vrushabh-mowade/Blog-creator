function AppbarSkeleton() {
    return <>
        <div className="h-2.5 bg-gray-300 rounded-full  max-w-[640px] mb-2.5 mx-auto"></div>
        <div className="h-2.5 mx-auto bg-gray-300 rounded-full  max-w-[540px]"></div>
    </>
}


function BlogCardSkeleton() {
    return <>
        <div className="border-b border-slate-200 pb-4 pl-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex pt-2">

                <div className="flex justify-center flex-col " >
                    <svg className="w-10 h-10 me-3 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                </div>
                <div className="font-extralight pl-2 flex justify-center flex-col ">
                    <div>
                        <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
                    </div>
                </div>
                <div className="flex justify-center flex-col pl-2 ">
                    .
                </div>
                <div className="font-thin text-slate-600 pl-2 flex justify-center flex-col">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                </div>

            </div>
            <div className="text-xl font-semibold pt-1 pb-2">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-md font-thin pb-4">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-slate-500 font-thin text-sm">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
        </div>



    </>
}


export const BlogsPageSkeleton = () => {
    return <>
        <AppbarSkeleton />
        <div className="flex justify-center flex-col">
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
            <BlogCardSkeleton />
        </div>

    </>
}

export const OneBlogPage = () => {
    return <>
        <AppbarSkeleton />
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-12 py-12 pt-20 w-full max-w-screen-3xl">
                    <div className="grid col-span-8 pr-4 ">
                        <div className="text-5xl font-extrabold">
                            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                        </div>
                        <div className="text-slate-500 pt-2">
                            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                        </div>
                        <div className=" text-md pt-4">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full "></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full "></div>
                        </div>

                    </div>
                    <div className="grid col-span-4 px-4">
                        <div className="text-slate-600 font-semibold pt-2 ">
                            <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
                        </div>

                        <div className="pt-4">
                            <div className="flex flex-cols ">
                                <div className="flex flex-col justify-center">
                                    <svg className="w-10 h-10 me-3 text-gray-200 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                    </svg>
                                </div>
                                <div className="text-xl font-bold pl-2">
                                    <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                                </div>
                            </div>
                            <div className="text-slate-500 pt-6">
                                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}