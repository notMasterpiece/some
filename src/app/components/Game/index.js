import React from 'react';
import './game.scss';
import Options from './Options';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      one: 0,
      two: 0,
      answer: 0,
      fakeArray: [],
      correct: false,
      gameOver: false,
      res: () => {
      }
    }



  }


  renderOption = ()  => {
    const {fakeArray, answer, correct} = this.state;
    return (
      <div className="game_answers">
        {
          fakeArray.map( el => {
            return <Options correct={correct} answer={answer} handleClick={this.handleClick}  option={el} key={el} />
          })
        }
      </div>
    )
  };


  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  handleClick = option => {
    console.log( 'option', option);
    if( option === this.state.answer) {
      console.log('good');

      this.setState({
        correct: true,
        gameOver: true,
        res: function () {
          return <h3 className='result_msg good'>good</h3>
        }
      });

    } else {
      console.log('bad');
      this.setState({
        correct: false,
        gameOver: true,
        res: function () {
          return <h3 className='result_msg nogood'>bad</h3>
        }
      })
    }


  };

  componentWillMount () {
    console.log('will');
  }





  componentDidMount() {
    console.log('did');

    const one_number = this.randomNumber(1, 999);
    const two_number = this.randomNumber(1, 999);
    const answer = one_number + two_number;
    const fakeArray = [];


    while( fakeArray.length < 3 ) {
      const rundom_number = this.randomNumber(1, 999);
      if( fakeArray.indexOf(rundom_number) > -1 ) continue;
      fakeArray.push(rundom_number);
    }

    fakeArray.push(answer);

    fakeArray.sort( () => {
      return 0.5 - Math.random();
    });

    this.setState({
      one: one_number,
      two: two_number,
      answer: answer,
      fakeArray: fakeArray
    });
  }



  render() {

    const {one, two, res} = this.state;

    return (
      <div className="game_wrap">

        <div className="game_title">
          Яка сума <span>&#160;{one}&#160;</span> + <span>&#160;{two}&#160;</span> = ?
        </div>
        {this.renderOption()}
        <p style={{textAlign: 'center', padding: '5px'}}>Correct: {this.state.correct ? 'True' : 'false'}</p>
        <p style={{textAlign: 'center', padding: '5px'}}>gameOver: {this.state.gameOver ? 'True' : 'false'}</p>

        {res()}

        <div className="play">
          <button className='play_again'>play again</button>
        </div>
      </div>
    )
  }
}


export default Game;