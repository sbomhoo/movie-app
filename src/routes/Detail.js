import React, { useEffect } from 'react';
import { useParams } from "react-router-dom"

function Detail(props) {
    const {mId} = useParams();      //라우트 url 파라미터값(id) 가져오기     //비구조화할당

    const getMovie = async() => {
        const json = await( 
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${mId}`)
        ).json();
        console.log(json)
    }

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <div>
            <h1>Detail</h1>
            {mId}
        </div>
    );
}

export default Detail;