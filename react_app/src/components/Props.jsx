import PropTypes from "prop-types";

export function Props(props) {
    return (
        <div className="card">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <p>Student: {props.children ? "Yes" : "No"}</p>
        </div>
    );
}

Props.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    children: PropTypes.bool.isRequired       
};