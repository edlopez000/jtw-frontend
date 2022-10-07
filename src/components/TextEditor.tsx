import * as monaco from 'monaco-editor';
import { initVimMode } from 'monaco-vim';
import { useEffect, useRef, useState } from 'react';

function TextEditor() {
  const [editor, setEditor] = useState<
    monaco.editor.IStandaloneCodeEditor | undefined
  >(undefined);
  const editorRef = useRef<HTMLDivElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const vimEnabled = true;

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current!, {
      fontSize: 16,
      theme: 'vs-dark',
      cursorSmoothCaretAnimation: true,
      minimap: {
        enabled: false,
      },
      wordWrap: 'on',
      scrollBeyondLastLine: false,
      cursorStyle: 'block',
      lineNumbers: 'off',
    });

    setEditor(editor);

    let vimMode: any = null;

    if (vimEnabled) {
      vimMode = initVimMode(editor, statusBarRef?.current!);
    }

    editor.focus();

    return () => {
      editor.dispose();
      vimMode?.dispose();
    };
  }, [vimEnabled]);

  return (
    <div>
      <div ref={editorRef} style={{ height: '90vh', width: '90vh' }} />
      <div ref={statusBarRef} />
    </div>
  );
}

export default TextEditor;
