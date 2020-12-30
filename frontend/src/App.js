import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
//import { CircleProgress } from './CircleProgress';
import Progressbar from './Progressbar';
import { Emoji } from './Emoji';
import { About } from './About';

export class App extends Component {

  state = {
    comment: '',
    sentiment: '',
    confidence: 0,
    textrow: 2
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if ((this.state.textrow < parseInt(this.state.comment.length/27+2)))
    {   this.setState({ textrow: parseInt(this.state.comment.length/27+2) })
    } else if ((this.state.textrow > parseInt(this.state.comment.length/27+2))) {
        this.setState({ textrow: parseInt(this.state.comment.length/27+2) })
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const data = { text:this.state.comment };
    axios
      .post('http://127.0.0.1:8000/api/', data)
      .then(res => {
        this.setState({ 
          sentiment:res.data.sentiment,
          confidence: res.data.confidence,
        })
      })
      .catch(e => console.log(e))
    this.setState({comment: ''})
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Sentiment Analysis</a>
            <button 
                  className="btn btn-outline-success me-2" 
                  type="button"
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal"
                >About</button>
                  <About />
          </div>
        </nav>
        <div id="task-container">
          <div id="task-wrapper">
            <div id="form-wrapper">
              <form onSubmit={this.onSubmit}  id="form">
                <div className="flex-wrapper">
                  <div>
                    <textarea 
                      onChange={this.onChange}
                      className="form-control" 
                      id="comment" 
                      value={this.state.comment}
                      rows={this.state.textrow}
                      type="text" 
                      name="comment" 
                      placeholder="Enter comment" />
                  </div>

                  <div>
                    <input id="submit" className="btn btn-warning" type="submit" name="Add" />
                  </div>
                </div>
              </form>
            </div>
            <div id="info-wrapper">
              <p><strong>Sentiment:</strong> {this.state.sentiment}</p>
              <p><strong>Confidence:</strong> {parseInt(this.state.confidence*100)}%</p>
            </div>
          </div>

          <div id = "result-wrapper">
            <Emoji sentiment={this.state.sentiment}/>
            <Progressbar done={this.state.confidence * 100}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App
