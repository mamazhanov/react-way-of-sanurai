import preloader from "../../../assets/images/Bean Eater-0.7s-200px.svg";
import React from "react";


const Preloader = (props) => {
    return(
        <div style={ { textAlign: 'center'} }>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;