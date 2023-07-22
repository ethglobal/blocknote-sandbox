import { defaultBlockSchema, defaultSlashMenuItems } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { GuideBlocksSchema } from "../utils/types";
import ImageBlock, { insertImageComponent } from "./image";

const Editor = () => {
  let _editor = useBlockNote<GuideBlocksSchema>({
    blockSchema: { ...defaultBlockSchema, image: ImageBlock },
    slashCommands: [...defaultSlashMenuItems, insertImageComponent],
    theme: "light",
    onTextCursorPositionChange: (editor) => {
      //focused element in dom
      const focused = document.activeElement;
      const editorDom = editor.domElement;
      //scroll to the block if the cursor is inside the editor
      if (
        editor &&
        focused &&
        editorDom?.contains(focused) &&
        editor.getTextCursorPosition()
      ) {
        const block = editor.getTextCursorPosition()?.block;
        console.log(block);
      }
    },
  });
  return (
    <div>
      <BlockNoteView editor={_editor} />
    </div>
  );
};

export default Editor;
