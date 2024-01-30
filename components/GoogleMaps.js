import React, { useEffect } from "react";

function GoogleMap(){
    useEffect(()=>{
        const ifameData=document.getElementById("googlemapserpt")
        const lat=17.413755;
        const lon=78.441151;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            <iframe id="googlemapserpt" height="500px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;