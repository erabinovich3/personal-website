import zod from "zod";

const envSchema = zod.object({
    CONTENTFUL_SPACE_ID: zod.string().min(1),
    CONTENTFUL_ACCESS_TOKEN: zod.string().min(1),
    CONTENTFUL_REVALIDATE_SECRET: zod.string().min(1),
});

export const env = envSchema.parse(process.env);
