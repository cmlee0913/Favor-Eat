import HambugerBar from '@/present/component/HambugerBar/HambugerBar'
import React, {memo} from 'react'
import * as style from "./Header.style"

function Header() {
    return <style.Container>
        <div></div>
        <HambugerBar />
    </style.Container>
}

export default memo(Header)