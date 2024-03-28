import { TypeProjectSkeleton } from "@/@types/contentful";
import { Project } from "@/model/Project";
import { parseTypeProjectSkeletonToProject } from "@/utils/parseEntryToProject";
import { createClient } from "contentful";
import { env } from "./env";

export const client = createClient({
    accessToken: env.CONTENTFUL_ACCESS_TOKEN,
    space: env.CONTENTFUL_SPACE_ID,
});

export async function getAllProjects(): Promise<Project[]> {
    const res = await client.getEntries<TypeProjectSkeleton>({
        content_type: "project",
        order: ["-sys.updatedAt"],
    });

    return res.items.map((project) =>
        parseTypeProjectSkeletonToProject(project)
    );
}
