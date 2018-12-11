import React from 'react';



const List = (props) =>{
    return(
        <div>
        
        <div className="activites">
            <h3>{props.creation_date}</h3>
            <h3>{props.observing_mode}</h3>
            <h3>{props.profiles}</h3>
            <h3>{props.target_name}</h3>
            <h3>{props.instrument_name}</h3>
            <h3>{props.titles}</h3>       
            <button className="removefacts" onClick={()=> props.removefact(props.id)}>Delete</button> 
              <button className="edit">Edit</button>
        </div>
        </div>
    )
}

export default List;