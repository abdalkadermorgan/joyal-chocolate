import data from "../data.json";

const Marge = () => {
    const chocolate_type = data.chocolate_type;
    const marge = data.chocolate_type;
    
    const margeData = marge.map(s => s.filling_type);


    console.log( "chocolate_type =>" ,chocolate_type); 
    console.log( "marge =>" ,marge); 
    console.log( "margeData =>" ,margeData); 

    return (
        
        <div>
            {margeData.map((test,index) => (
                <div key={index}>
                    {test.map((v) => v.name)}
                </div>
            ))}
        </div>
        )
    
}

export default Marge;