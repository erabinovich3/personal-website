import { TypeProjectSkeleton } from "@/@types/contentful";
import { Project } from "@/model/Project";
import { parseTypeProjectSkeletonToProject } from "@/utils/parseEntryToProject";
import { strict as assert } from "assert";
import {createClient} from "contentful";

const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;

assert(CONTENTFUL_ACCESS_TOKEN);
assert(CONTENTFUL_SPACE_ID);

export const client = createClient({
    accessToken: CONTENTFUL_ACCESS_TOKEN,
    space: CONTENTFUL_SPACE_ID,
});

export async function getAllProjects(): Promise<Project[]> {
    const res = await client.getEntries<TypeProjectSkeleton>({
        content_type: "project",
        order: ["-sys.updatedAt"]
    });
    
    return res.items.map(project => parseTypeProjectSkeletonToProject(project));
}
