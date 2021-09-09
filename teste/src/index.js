import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, useState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyInput = () => {
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty(),
);

return <Editor editorState={editorState} onChange={setEditorState} />;
};

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = editorState => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }
  _onItalicClick()
  {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }
  _onCode()
  {
    this.onChange(RichUtils.toggleCode.bind(this.state.editorState))
  }
  render() {
    return (
      <div>
         <button onClick={this._onCode.bind(this)}>C</button>

        <button onClick={this._onBoldClick.bind(this)}>B</button>
        <button onClick={this._onItalicClick.bind(this)}>I</button>

      <Editor editorState={this.state.editorState} 
      handleKeyCommand={this.handleKeyCommand}
      onChange={this.onChange} />
      </div>
    );
  }
}

ReactDOM.render(<MyEditor />, document.getElementById('root'));

