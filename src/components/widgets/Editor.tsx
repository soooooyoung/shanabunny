"use client";

import { useEffect, useRef, useState } from "react";
import {
  EditorState,
  LexicalEditor,
  SerializedEditorState,
  SerializedLexicalNode,
} from "lexical";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import ToolbarPlugin from "@/components/plugins/ToolbarPlugin";
import TreeViewPlugin from "@/components/plugins/TreeViewPlugin";
import InlineImagePlugin from "@/components/plugins/InlineImagePlugin";
import { theme } from "@/shared/data/editor.data";
import Nodes from "../nodes";
import { RawPost } from "@/shared/models";
import { $generateHtmlFromNodes } from "@lexical/html";

function Placeholder() {
  return <div className="editor-placeholder">this is placeholder...</div>;
}

interface Props {
  onSave: (content?: string) => void;
}

export function Editor({ onSave }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState("");
  const editorRef = useRef<LexicalEditor>();
  const editorStateRef = useRef<EditorState>();
  const editorConfig: InitialConfigType = {
    namespace: "React.js Demo",
    nodes: [...Nodes],
    // Handling of errors during update
    onError(error: Error) {
      throw error;
    },

    // The editor theme
    theme,
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
          <OnChangePlugin
            onChange={(state, editor) => {
              editorStateRef.current = state;
              state.read(() => {
                const htmlString = $generateHtmlFromNodes(editor, null);

                setContent(htmlString);
              });
            }}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
          <InlineImagePlugin />
          {/* <TreeViewPlugin /> */}
        </div>
      </div>
      <button
        onClick={() => {
          if (content) {
            onSave(content);
            // onSave(editorStateRef.current.toJSON().root.children[0] as RawPost);
          }
        }}
      >
        Save{" "}
      </button>
    </LexicalComposer>
  );
}
