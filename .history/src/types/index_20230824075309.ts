import {z} from 'zod'


export const signupInput = z.object({
    username: z.string(),
    password: z.string(),
    type: z.string()
})

export type SignupParams = z.infer<typeof signupInput>;

export const loginInput = z.object({
    username: z.string(),
    password: z.string()
})

export type LoginParams = z.infer<typeof loginInput>