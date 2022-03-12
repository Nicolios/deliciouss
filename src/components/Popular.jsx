import {useEffect} from "react";

function Popular(){

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=d8add538ecfa4a8c966d85c65a2e2a70&number=9`)
        const data = await api.json();
        console.log(data);
    }

    return (
        <div>Popular</div>
    )
}

export default Popular