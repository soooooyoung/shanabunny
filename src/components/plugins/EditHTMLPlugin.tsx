import { useEffect, useRef } from "react";
import { $generateNodesFromDOM } from "@lexical/html";
import { $getRoot, $insertNodes } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

interface EditHTMLPluginProps {
  editContent?: string;
}

export default function EditHTMLPlugin({ editContent }: EditHTMLPluginProps) {
  const [editor] = useLexicalComposerContext();
  const isContentLoaded = useRef(false); // Track if the content has been loaded already

  useEffect(() => {
    console.log(editContent);
    if (editContent && !isContentLoaded.current) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(editContent, "text/html");
        const nodes = $generateNodesFromDOM(editor, dom);

        // Select the root and insert the nodes without clearing the existing content
        $getRoot().select();
        $insertNodes(nodes);
        isContentLoaded.current = true;
        console.log("entered");
      });
    }
  }, [editor, editContent]);

  return null;
}
