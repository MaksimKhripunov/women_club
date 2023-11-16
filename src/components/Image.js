import React from "react";
import PropTypes from "prop-types"

class Image extends React.Component{
    render() {
        return(
            <>
            <noscript>F</noscript>
            <img src={this.props.image} className={this.props.className} alt={"d"}></img>
            </>
        )
    }
}

Image.propTypes={
    image: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default Image;