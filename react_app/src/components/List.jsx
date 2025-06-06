import PropTypes from "prop-types"

export function List(props) {
   
    const category = props.category
    const itemList = props.item

    const shoeList = itemList.map((item => 
      <li key={item.id}>
      {item.name}: {item.price}    
      </li> ))


    return(
              <>
              <h2 className="ShoeCategory">{category}</h2>
              <ol className="ShoeLists">{shoeList}</ol>
              </> )



}

List.propTypes = {
  category: PropTypes.string,
  item: PropTypes.array,

}

List.defaultProps = {
  category: "Category",
  item: []
}