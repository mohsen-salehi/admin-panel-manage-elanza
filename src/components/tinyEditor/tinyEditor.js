import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TinyEditor() {
    const editorRef = useRef(null);

    return (
        <>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                    ],
                    toolbar:`
                    undo redo | blocks | bold italic forecolor | alignleft aligncenter | alignright alignjustify | bullist numlist outdent indent | removeformat | help | image | media | advlist | autolink |lists | link | charmap | preview |  anchor | searchreplace | visualblocks | code |  fullscreen |  insertdatetime |  table | wordcount
                    `

                }}
            />

        </>
    );
}