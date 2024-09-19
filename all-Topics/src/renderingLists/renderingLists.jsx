import styles from "./renderingLists.module.css";
import propTypes from 'prop-types';

function List(props)
{
    // fruits.sort((a ,b) => a.calories>b.calories);//for ascending
    // fruits.sort((a ,b) => a.calories<b.calories); //for descending
    // fruits.sort((a,b)=> a.name.localeCompare(b.name));//alphabetical
    //fruits.sort((a,b)=> b.name.localeCompare(a.name));//for reverse alphabetical
    //&nbsp; is used for space

    // const lowCalFruits = fruits.filter((fruit)=>fruit.calories<100);

    // const highCalFruits = fruits.filter((fruit)=>fruit.calories>100);

    const itemList = props.items;
    const category = props.category;

    const listItems  = itemList.map((item)=>
    {
        return (<li key={item.id}>{item.name}: &nbsp;
                                   <b>{item.calories}</b></li>);
    });

    return(
        <>
            {
                listItems.length>0 &&
                                    (<>
                                        <h3 className={styles.category}>{category}</h3>
                                        <ol className={styles.listItems}>{listItems}</ol>
                                    </>)
                                    //for else case nothing will be rendered as && turns false for an length<0
            }
        </>
    );

}

List.propTypes = {
    category: propTypes.string.isRequired,
    items: propTypes.arrayOf(propTypes.shape({ id: propTypes.number,
                                               name: propTypes.string,
                                               calories: propTypes.number,})),
}

List.defaultProps = {
    category: "Category",
    items:[],
}

export default List;