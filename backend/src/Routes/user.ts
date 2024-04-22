import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";




export const userroute = new Hono<{
    Bindings: {
        DATABASE_URL: String,
        jwt_secret: string
    },
    variables : {
        
    }
}>();

userroute.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());


    try {
        const body = await c.req.json();
        //@ts-ignore
        // const { successs } = signuptype.safeParse(body);
        
        // if(!successs){
        //     c.status(411)
        //     return c.json({
        //         msg : "input are not correct "
        //     })
        // }
        
        const user = await prisma.user.create({
            //@ts-ignore
            data: {
                name: body.name,
                username: body.username,
                password: body.password
            }
        })

        const token = await sign({ id: user.id }, c.env.jwt_secret);


        return c.json({
            token
        })

    } catch (e) {
        c.status(403);
        return c.json({ msg: "error while sign  up" })

    }


})





userroute.post('/signin', async (c) => {

    const prisma = new PrismaClient({
        //@ts-ignore
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    // const { successs } = signininput.Parse(body); 
        
    //     if(!successs){
    //         c.status(411)
    //         return c.json({
    //             msg : "input are not correct "
    //         })
    //     }

    const user = await prisma.user.findUnique({
        //@ts-ignore
        where: {
            //@ts-ignore
            username: body.username,
            password: body.password
        }
    })

    if (!user) {
        c.status(403)
        return c.json({
            error: "error while signin in"
        })
    }

    const jwt = await sign({ id: user.id }, c.env.jwt_secret);
    return c.json({
        jwt
    })

})
