"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  $createNodeSelection,
  $getNodeByKey,
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
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import ToolbarPlugin from "@/components/plugins/ToolbarPlugin";
import InlineImagePlugin from "@/components/plugins/InlineImagePlugin";
import { theme } from "@/shared/data/editor.data";
import Nodes from "../nodes";
import { $generateHtmlFromNodes } from "@lexical/html";
import { $getNodeFromDOM } from "lexical/LexicalUtils";

function Placeholder() {
  return <div className="editor-placeholder">this is placeholder...</div>;
}

interface Props {
  onSave: (content?: string) => void;
}

export default function Editor({ onSave }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [content, setContent] = useState("");
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
        <div className="editor-inner min-h-96">
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
          <ListPlugin />
          {/* <TreeViewPlugin /> */}
        </div>
      </div>
      <button
        className="btn text-sm text-white bg-pink-200 hover:bg-purple-200 w-full shadow-sm group"
        onClick={() => {
          if (content) {
            onSave(content);
          }
        }}
      >
        Save
      </button>
    </LexicalComposer>
  );
}
