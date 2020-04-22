import React, { FC, useState } from 'react'
import { AvatarContainer, EditIcon, Preview, SelectedImg } from './imageUpload.styles'


export const ImageUpload:FC<{}> = () =>{
    const [selectedImage, setSelectedImage]= useState('http://i.pravatar.cc/500?img=7')
    const handleFileUpload = (e:any) => {
        // e.target.files[0]

    }
    return <AvatarContainer>
            <EditIcon>
                <input accept=".png, jpg, .jpeg"  type="file" onChange={handleFileUpload} />
                <label />
            </EditIcon>
            <Preview>
                <SelectedImg />
            </Preview>
    </AvatarContainer>
}