import React, { FC, useState } from 'react'
import { IImageUpload } from "./types";
import { AvatarContainer, EditIcon, Preview, SelectedImg } from './imageUpload.styles'
import defaultImage from '../assests/default-profile.png'

/**Todo need to clean this code, make a dumb component  */
export const ImageUpload: FC<IImageUpload> = ({ formik }) => {
    const [selectedImage, setSelectedImage] = useState<{file:object, imagePreviewUrl: string | null}>({file:{}, imagePreviewUrl:null})
    const handleFileUpload = (e: any) => {
        const {setFieldValue} = formik; 
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            if(typeof reader.result === 'string'){

                setSelectedImage({
                    file,
                    imagePreviewUrl: reader.result
                });
            }
        }

        setFieldValue('image', file)
        reader.readAsDataURL(file)
    }
    return <AvatarContainer>
        <EditIcon>
            <input accept=".png, jpg, .jpeg" type="file" onChange={handleFileUpload} />
            <label />
        </EditIcon>
        <Preview>
            <SelectedImg src={selectedImage.imagePreviewUrl ? selectedImage.imagePreviewUrl : defaultImage} alt=" profile image" />
        </Preview>
    </AvatarContainer>
}