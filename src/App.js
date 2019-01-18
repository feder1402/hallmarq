import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/darcula.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchbrackets'

// const App = () => <CodeMirror value="// Code" mode={{name: "javascript", json: true}} onChange={(code) => {console.log(code)}} options={{lineNumbers: true}} />
// App.displayName = "App"

const options = {
  lineNumbers: true,
  mode: { name: "javascript", json: true },
  theme: "darcula",
  autoCloseBrackets: true,
  matchBrackets: true
}

class App extends Component {

  state = { code: "{\n}" }

  updateCode = (code) => this.setState({ code })

  submitCode = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.code)
    }
  }

  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar justify-content-between" style={{backgroundColor: "#e3f2fd"}}>
          <form class="form-inline">
            <button class="btn btn-outline-primary" onClick={this.submitCode}>Render</button>
          </form>
        </nav>
        <div class="card-group">
          <div class="card">
            <div class="card-header text-center">
              JSON
              </div>
            <div class="card-body">
              <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
            </div>
            <div class="card-footer text-rigth">
            </div>
          </div>
          <div class="card">
            <div class="card-header text-center">
              Card
              </div>
            <div class="card-body">
              Another card
              </div>
            <div class="card-footer text-rigth">
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App