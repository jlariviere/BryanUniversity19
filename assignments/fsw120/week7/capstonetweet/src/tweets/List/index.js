// List
import React from "react"
import styled from "styled-components"
import TweetPreview from "./TweetPreview"

    const container = styled.div`  
display: flex;
alignItems: center;

`


List=()=>{

    return(
        <container>
            <TweetPreview />
        </container>
    )
}

export default List