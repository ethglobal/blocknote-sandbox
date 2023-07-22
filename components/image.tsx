import { BlockNoteEditor, defaultProps } from "@blocknote/core";
import { ReactSlashMenuItem, createReactBlockSpec } from "@blocknote/react";
import { PhotoIcon } from "@heroicons/react/24/outline";

interface IBasicProps {
  block: any;
  editor: BlockNoteEditor<any>;
  context?: string; // will be either "editor", "gallery", or "viewer"
}

export const ImageBlock = createReactBlockSpec({
  type: "image" as const,
  propSchema: {
    ...defaultProps,
    src: {
      default: "",
    },
    alt: {
      default: "",
    },
    editing: {
      default: "false",
    },
  },
  containsInlineContent: false,
  render: ({ block, editor }) => {
    return <div>bro</div>;
  },
});

export const insertImageComponent = new ReactSlashMenuItem<{
  image: typeof ImageBlock;
}>(
  "Image",
  (editor) => {
    editor.insertBlocks(
      [
        {
          type: "image",
          props: {
            editing: "true",
          },
        },
      ],
      editor.getTextCursorPosition().block,
      "after"
    );
  },
  ["photo", "image", "picture"],
  "Basic",
  <PhotoIcon></PhotoIcon>,
  "Add an image"
);

export default ImageBlock;
