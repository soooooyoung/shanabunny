"use client";

import { useEffect, useRef, useState } from "react";
import { EditorState } from "lexical";
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
    onError(error: Error) {
      throw error;
    },
    editorState:
      '{"root":{"children":[{"children":[],"direction":null,"format":"left","indent":0,"type":"paragraph","version":1,"textFormat":0}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
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

                const json = state.toJSON();
                console.log(JSON.stringify(json));

                console.log(htmlString);
                let doc = new DOMParser().parseFromString(content, "text/html");
                const body = doc.getElementsByTagName("body");
                const newsave = Array.from(body)[0].outerHTML;
                console.log(newsave);
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
        onChange={() => {
          if (content) {
            console.log(content);
          }
        }}
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
