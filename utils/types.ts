import { DefaultBlockSchema } from "@blocknote/core";
import ImageBlock from "../components/image";

export type GuideBlocksSchema = DefaultBlockSchema & {
  image: typeof ImageBlock;
};
