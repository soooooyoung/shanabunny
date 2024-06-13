"use client";
import { $getRoot, $getSelection } from "lexical";
import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import ToolbarPlugin from "@/components/widgets/ToolbarPlugin";
import TreeViewPlugin from "@/components/widgets/TreeViewPlugin";
import { theme } from "@/shared/data/editor.data";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
function Placeholder() {
  return <div className="editor-placeholder">this is placeholder...</div>;
}
function onChange(editorState: any) {
  editorState.read(() => {
    // Read the contents of the EditorState here.
    const root = $getRoot();
    const selection = $getSelection();

    console.log(root, selection);
  });
}
export function Editor() {
  const editorConfig = {
    namespace: "React.js Demo",
    nodes: [],
    // Handling of errors during update
    onError(error: Error) {
      throw error;
    },
    // The editor theme
    theme,
  };
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container w-full max-w-3xl">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <OnChangePlugin onChange={onChange} />
          <HistoryPlugin />
          <AutoFocusPlugin />
          {/* <TreeViewPlugin /> */}
        </div>
      </div>
    </LexicalComposer>
  );
}
