import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';

class List extends React.Component {


  static propTypes = {
    title: PropTypes.node.isRequired,
    titleText: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  }
  /*static defaultProps = {    
    
    description: settings.defaultListDescription,
  }*/


  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <Container>
          <div className={styles.columns}>
            {columns.map(listData => (
              <Column key={listData.id} {...listData} />
            ))}

          </div>
          {
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn} />

            </div>
          }
        </Container>
      </section>

    );
  }
}

export default List;