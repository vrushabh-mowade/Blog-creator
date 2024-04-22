import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from '@prisma/client/edge'
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { useId } from "hono/jsx";
import { string } from "zod";


export const blogroute = new Hono<{
    Bindings: {
        DATABASE_URL: String,
        jwt_secret: string
    },
    variables: {
        userId: string
    }
}>();


blogroute.use('/*', async (c, next) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const authheader = c.req.header("authorization");
    try {
        const user = await verify(authheader || "", c.env.jwt_secret);

        if (user) {
            //@ts-ignore
            c.set("userId", user.id);
            await next()

        } else {
            c.status(411);
            return c.json({
                "error": "authorization error "
            })
        }


    } catch (e) {
        c.status(403);
        return c.json({
            "error": "you are not logged in  "
        })

    }



})


blogroute.post('/', async (c) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    //@ts-ignore
    const authorId = c.get("userId");
    const blog = await prisma.blog.create({
        //@ts-ignore
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(authorId)
        }


    })

    return c.json({
        "id": blog.id
    })

})



blogroute.put('/', async (c) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const blog = await prisma.blog.update({
        where: {
            id: body.id
        }, data: {
            title: body.title,
            content: body.content
        }
    })

    return c.json({
        "id": blog.id
    })
})


// add pagination to this 
blogroute.get('/bulk', async (c) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.blog.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
        
});

    return c.json({
        blogs
    })
})



blogroute.get('/:id', async (c) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param("id");
    const blog = await prisma.blog.findFirst({
        where: {
            id: Number(id)
        },
        select :{
            title : true,
            id : true,
            content : true,
            author :{
                select:{
                    name:true
                }
            }
        }
    })
    return c.json({
        blog
    })
})
