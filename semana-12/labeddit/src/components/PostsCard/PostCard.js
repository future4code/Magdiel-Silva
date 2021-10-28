import React from "react"
import { ContainerPostCard } from "./styled"

export const PostCard = (props) =>{

    return(
        <ContainerPostCard>
            {props.name}
        </ContainerPostCard>
    )


}