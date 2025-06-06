import PropTypes from "prop-types";

function Greetings(props) { 
    return(props.isLoggedIn ? <h2 className="welcome">Welcome {props.name}</h2> 
                          : <h2 className="login">Please Log in </h2>);
}

Greetings.propTypes = {
    name: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

Greetings.defaultProps = {
    name: "Guest", 
    isLoggedIn: false,      
}

export default Greetings;