import React, { useState, useEffect } from "react"
import { UserMouse } from "./UserMouse"
import { useUserIds } from "../../../common/recoil/users"


export const MouseRenderer = () => {
    const userIds = useUserIds();
    return(
        <>
        {userIds.map((userId) => {
            return <UserMouse userId={userId} key={userId}/>
        })}
        </>
    )
}