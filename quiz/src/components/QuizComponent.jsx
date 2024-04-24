import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
    <div className='Quiz-page'>

          <div className='blankspace'>

            <p className='pg'>1 of 15</p>
            <h2 className='Q'> Question</h2>

            <h4 className='Qs'>Which is the only mammal that can jump?</h4>
        <div className='firstTwo'>
            <div className='one'>Dog</div>
            <div className='two'>Elephant</div>
        </div>

        <div className='lastTwo'>
            <div className='three'>Goat</div>
            <div className='four'>Lion</div>
        </div>

        <div className='Btn'>
            <button className='previous'>Previous</button>
            <button className='next'>Next</button>
            <button className='Quit'>Quit</button>
        </div>

          </div>

    
    
    </div>
    )
  }
}