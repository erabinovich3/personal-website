import { TypeProjectSkeleton } from "@/@types/contentful";
import {
    Project,
    ProjectDetails,
    ProjectImage,
    ProjectLink,
} from "@/model/Project";
import { Asset, AssetLink, Entry } from "contentful";

export function parseTypeProjectSkeletonToProject(
    projectSkeleton: Entry<TypeProjectSkeleton, undefined, string>
): Project {
    if (!projectSkeleton) {
        throw new Error(
            `Expected Entry to parse but received ${projectSkeleton}`
        );
    }

    return {
        id: projectSkeleton.sys.id,
        name: projectSkeleton.fields.name?.toString() || "",
        description: projectSkeleton.fields.description?.toString() || "",
        image: parseImageToProjectImage(projectSkeleton.fields.image),
        details:
            parseDetailsToProjectDetails(projectSkeleton.fields.details) || {},
    };
}

function parseImageToProjectImage(
    image: Asset<undefined, string> | { sys: AssetLink }
): ProjectImage {
    if (!image) {
        throw new Error(`Expected Image to parse but received ${image}`);
    }

    if (!("fields" in image)) {
        throw new Error(
            `Provided Image does not have fields. Unable to parse.`
        );
    }

    return {
        src: `https:${image.fields.file?.url}` || null,
        alt: image.fields.description || image.fields.title || null,
        width: image.fields.file?.details.image?.width || 0,
        height: image.fields.file?.details.image?.height || 0,
    };
}

function parseDetailsToProjectDetails(details: any | null): ProjectDetails {
    if (!details) {
        throw new Error(
            `Expected details object to parse but received ${details}`
        );
    }

    return {
        tags: details.tags,
        links: parseLinksToProjectLinks(details.links),
    };
}

function parseLinksToProjectLinks(links: any): ProjectLink[] {
    if (!links) {
        throw new Error(`Expected links object to parse but received ${links}`);
    }

    return links.map((link: { type: any; link: any }) => {
        return {
            type: link.type,
            url: link.link,
        };
    });
}
