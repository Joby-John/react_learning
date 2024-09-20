import styles from './Card.module.css'
import PropTypes from 'prop-types' 


function Card(props) {
    const people = props.people;
  
    if (!people || !people.length) {
      return <p>No people found.</p>; // Handle empty list (optional)
    }
  
    return (
      <>
        {people.map((person)=>
                                (
                                    <div key={person.name} className={styles.card}>
                                        <h1>{person.name}</h1>
                                        <h2>{person.age}</h2>
                                        <h3>{person.partner}</h3>
                                    </div>
                                )
                    )
        }
      </>
    );
  }

  Card.propTypes = {
    people: PropTypes.arrayOf(PropTypes.shape({name:PropTypes.string},
                                              {age:PropTypes.number},
                                              {partner:PropTypes.string}
    )),
  }

  Card.defaultProps = {
    people : [],
  }

  export default Card;