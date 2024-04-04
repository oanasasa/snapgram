import { z } from "zod";

export const SignupValidationSchema = z.object({
    name: z.string().min(2, { message: "Too short" }),
    username: z.string().min(2, { message: "Too short" }),
    email: z.string().email(),
    password: z
        .string()
        .refine(
            (val) =>
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
                    val
                ),
            {
                message:
                    "Password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
            }
        ),
});
