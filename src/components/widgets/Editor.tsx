"use client";

import { useEffect, useRef, useState } from "react";
import {
  EditorState,
  SerializedEditorState,
  SerializedLexicalNode,
} from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
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

function Placeholder() {
  return <div className="editor-placeholder">this is placeholder...</div>;
}

interface Props {
  onSave: (content?: RawPost) => void;
}

export function Editor({ onSave }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const editorStateRef = useRef<EditorState>();
  const editorConfig = {
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
            onChange={(state) => {
              editorStateRef.current = state;
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
          if (editorStateRef.current) {
            onSave(editorStateRef.current.toJSON().root.children[0] as RawPost);
          }
        }}
      >
        Save{" "}
      </button>
    </LexicalComposer>
  );
}
