import React from "react";
import Pets from "./Pets";

const Results = ({pets}) => {
    return <div className="search">
        {!pets.length ? (<h1>No pets found</h1>) :(pets.map((pet) =>(
            <Pets
               animal={pet.animal}
               name={pet.name}
               breed={pet.breed}
               images={pet.images}
               location={`${pet.city}, ${pet.state}`}
               key={pet.id}
               id={pet.id}
            />
        ))
    )}
        
    </div>
}

export default Results