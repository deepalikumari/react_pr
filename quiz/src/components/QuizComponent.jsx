import React, { Component } from 'react'
import questions from "../resources/Question.json"

export default class QuizComponent extends React.Component {
    constructor() {
        super();
        this.state={
            currentIndex:0
        }

    }
    Prev=()=>{
        this.setState(prev=>({
            currentIndex: Math.max(0,prev.currentIndex-1)
        }))
    }
    Next=()=>{
        this.setState(prev=>({
            currentIndex: Math.min(14,prev.currentIndex+1)
        }))
    }
    Quit=()=>{
        alert("Are you sure to exit?")
        this.setState(prev=>({
            currentIndex:0
        }))
    }
    render() { 
        let {currentIndex}=this.state
        let{question,optionA,optionB,optionC,optionD}=questions[currentIndex]

        return ( 
            <>
            <div className="body2">
            <div className="containerquiz">
                <h2>Question</h2>
                <p className='Qnum'>{currentIndex+1} of 15</p>
                <h4>{question}</h4>
                <div className="options">
                    <button>{optionA}</button>
                    <button>{optionB}</button>
                    <button>{optionC}</button>
                    <button>{optionD}</button>
                </div>
                <div className="navButtons">
                    <button id='prev' onClick={this.Prev}>Previous</button>
                    <button id='next' onClick={this.Next}>Next</button>
                    <button id='quit'onClick={this.Quit}>Quit</button>
                </div>
            </div>
            </div>
            </>
         );
    }
}
