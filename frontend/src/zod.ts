import { z } from 'zod';


const signupinput = z.object({

    username : z.string().email(),
    password : z.string().min(6),
    name : z.string().optional()
})

// type interference in zod 

const signininput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
})



const bloginput = z.object({
    title : z.string(),
    content : z.string()
})


const updatebloginput = z.object({
    title : z.string(),
    content : z.string(),
    id : z.number()
})


export type signuptype = z.infer< typeof signupinput>
export type signintype = z.infer< typeof signininput>
export type bloginputtype = z.infer<typeof bloginput>
export type updatebloginputtype = z.infer<typeof updatebloginput>
