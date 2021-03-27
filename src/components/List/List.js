import React from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

class List extends React.Component {
    static propTypes = {
      title: PropTypes.node,
      children: PropTypes.node,
    }

    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }

    render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} img={this.props.image} />
        <div className={styles.columns}>
            <ul>
                <li>Animals</li>
                <li>Plants</li>
                <li>Minerals</li>
            </ul>
        </div>
        <div className={styles.description}>
            {this.props.children}
        </div>
      </section>
    )
  }
}

export default List;
