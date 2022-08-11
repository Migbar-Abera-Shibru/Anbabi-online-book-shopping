import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';
import { useNavigate } from 'react-router-dom'


const Editor = () => {
  let navigate= useNavigate();
  return(
  
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
  
    <Header category="App" title="New Posts" />
    <RichTextEditorComponent>
      <EditorData />
      <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
    </RichTextEditorComponent>
    <button className='rounded-xl m-3 p-3 bg-red-400 hover:bg-orange-600'  onClick={() => { navigate("/dashboard")}}>Post</button>
  </div>
)
}
export default Editor;
