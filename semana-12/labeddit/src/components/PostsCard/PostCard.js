import React from "react"
import { ContainerPostCard } from "./styled"

export const PostCard = (props) =>{
    console.log(props)

    return(
        <ContainerPostCard>
            {props.body}
        </ContainerPostCard>
    )


}