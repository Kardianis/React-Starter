import React from 'react';
import styles from './Motivation.scss';
import { quotes } from '../../data/dataStore';

class Motivation extends React.Component{
    state = {
      selectedQuote: null,
    }

    stateRandomQuote = () => {
      const randomQuote = Math.floor(Math.random() * quotes.length);
      this.setState ({
      
        selectedQuote: quotes[randomQuote],
      });
    }
    render(){
    
      return(
        <div className={styles.component}>
          <button onClick={this.stateRandomQuote} className={styles.btn}>Check today&apos;s message:</button>
          
          <p>{this.state.selectedQuote}</p>
        </div>
      );
    }
}

export default Motivation;