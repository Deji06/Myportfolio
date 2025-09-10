import {z} from 'zod'

export const ContactSchema = z.object({
    name: z.string().min(3, 'name is required'),
    email: z.string().email({message:'please provide a valid email address'}),
    phone: z.string().optional().refine((val) => !val || /^[\d\s+()-]{7,15}$/.test(val),
    'Please provide valid phone number'
),
    message: z.string().min(1, 'Please drop a message')
})

export type ContactFormData = z.infer<typeof ContactSchema>