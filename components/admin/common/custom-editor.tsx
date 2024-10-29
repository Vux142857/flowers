'use client';
import { useState, useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';

import {
	ClassicEditor,
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	AutoLink,
	Autosave,
	BalloonToolbar,
	Base64UploadAdapter,
	BlockQuote,
	BlockToolbar,
	Bold,
	Code,
	CodeBlock,
	Essentials,
	FindAndReplace,
	Heading,
	Highlight,
	HorizontalLine,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromMarkdownExperimental,
	PasteFromOffice,
	SelectAll,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Undo,
	EditorConfig
} from 'ckeditor5';

import translations from 'ckeditor5/translations/vi.js';

import 'ckeditor5/ckeditor5.css';

interface CustomEditorProps {
	editorData: string;
	setEditorData: (data: string) => void;
}

const CustomEditor: React.FC<CustomEditorProps> = ({ editorData, setEditorData }) => {
	const editorContainerRef = useRef(null);
	const editorRef = useRef(null);
	const [isLayoutReady, setIsLayoutReady] = useState(false);

	useEffect(() => {
		setIsLayoutReady(true);

		return () => setIsLayoutReady(false);
	}, []);

	const editorConfig = {
		toolbar: {
			items: [
				'undo', 'redo', '|', 'heading', '|', 'bold', 'italic', 'underline', '|',
				'link', 'insertImage', 'insertTable', 'highlight', 'blockQuote', 'codeBlock', '|',
				'bulletedList', 'numberedList', 'todoList', 'indent', 'outdent'
			],
			shouldNotGroupWhenFull: false
		},
		plugins: [
			AccessibilityHelp, Autoformat, AutoImage, AutoLink, Autosave, BalloonToolbar, Base64UploadAdapter,
			BlockQuote, BlockToolbar, Bold, Code, CodeBlock, Essentials, FindAndReplace, Heading, Highlight,
			HorizontalLine, HtmlEmbed, ImageBlock, ImageCaption, ImageInline, ImageInsert, ImageInsertViaUrl,
			ImageResize, ImageStyle, ImageTextAlternative, ImageToolbar, ImageUpload, Indent, IndentBlock, Italic,
			Link, LinkImage, List, ListProperties, MediaEmbed, Paragraph, PasteFromMarkdownExperimental,
			PasteFromOffice, SelectAll, SpecialCharacters, SpecialCharactersArrows, SpecialCharactersCurrency,
			SpecialCharactersEssentials, SpecialCharactersLatin, SpecialCharactersMathematical, SpecialCharactersText,
			Strikethrough, Table, TableCellProperties, TableProperties, TableToolbar, TextTransformation, TodoList,
			Underline, Undo
		],
		balloonToolbar: ['bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
		blockToolbar: [
			'bold', 'italic', '|', 'link', 'insertImage', 'insertTable', '|',
			'bulletedList', 'numberedList', 'indent', 'outdent'
		],
		heading: {
			options: [
				{
					model: 'paragraph',
					title: 'Paragraph',
					class: 'ck-heading_paragraph'
				},
				{
					model: 'heading1',
					view: 'h1',
					title: 'Heading 1',
					class: 'ck-heading_heading1'
				},
				{
					model: 'heading2',
					view: 'h2',
					title: 'Heading 2',
					class: 'ck-heading_heading2'
				},
				{
					model: 'heading3',
					view: 'h3',
					title: 'Heading 3',
					class: 'ck-heading_heading3'
				},
				{
					model: 'heading4',
					view: 'h4',
					title: 'Heading 4',
					class: 'ck-heading_heading4'
				},
				{
					model: 'heading5',
					view: 'h5',
					title: 'Heading 5',
					class: 'ck-heading_heading5'
				},
				{
					model: 'heading6',
					view: 'h6',
					title: 'Heading 6',
					class: 'ck-heading_heading6'
				}
			]
		},
		image: {
			toolbar: [
				'toggleImageCaption', 'imageTextAlternative', '|',
				'imageStyle:inline', 'imageStyle:wrapText', 'imageStyle:breakText', '|', 'resizeImage'
			]
		},
		initialData: '',
		language: 'vi',
		link: {
			addTargetToExternalLinks: true,
			defaultProtocol: 'https://',
			decorators: {
				toggleDownloadable: {
					mode: 'manual',
					label: 'Downloadable',
					attributes: {
						download: 'file'
					}
				}
			}
		},
		list: {
			properties: {
				styles: true,
				startIndex: true,
				reversed: true
			}
		},
		menuBar: {
			isVisible: true
		},
		placeholder: 'Type or paste your content here!',
		table: {
			contentToolbar: [
				'tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'
			]
		},
		translations: [translations]
	};


	return (
		<div className="main-container">
			<div className="editor-container editor-container_classic-editor editor-container_include-block-toolbar" ref={editorContainerRef}>
				<div className="editor-container__editor">
					<div ref={editorRef}>{isLayoutReady &&
						<CKEditor
							editor={ClassicEditor}
							config={editorConfig as EditorConfig}
							data={editorData}
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log(JSON.stringify(data));
								setEditorData(data);
							}}
						/>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CustomEditor;