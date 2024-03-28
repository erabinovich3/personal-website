import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeProjectFields {
  name: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  image: EntryFieldTypes.AssetLink;
  details: EntryFieldTypes.Object;
}

export type TypeProjectSkeleton = EntrySkeletonType<
  TypeProjectFields,
  "project"
>;
export type TypeProject<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeProjectSkeleton, Modifiers, Locales>;
