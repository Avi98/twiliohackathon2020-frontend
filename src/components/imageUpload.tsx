import React, { FC, useState } from 'react'
import { IImageUpload } from "./types";
import { AvatarContainer, EditIcon, Preview, SelectedImg } from './imageUpload.styles'
import defaultImage from '../assests/default-profile.png'

export const PreviewComp = ({ selectedImage: { imagePreviewUrl = defaultImage }, height, width }: { selectedImage: { imagePreviewUrl?: string | null }, width?:string, height?: string}) =>
    <Preview width={width} height={height}>
        <SelectedImg
            // @ts-ignore
            src={imagePreviewUrl}
            alt=" profile image"
        />
    </Preview>
/**Todo need to clean this code, make a dumb component  */
export const ImageUpload: FC<IImageUpload> = ({ formik }) => {
    const [selectedImage, setSelectedImage] = useState<{ file: object, imagePreviewUrl: string | null }>({ file: {}, imagePreviewUrl: null })
    const handleFileUpload = (e: any) => {
        const { setFieldValue } = formik;
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            if (typeof reader.result === 'string') {

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
        {handleFileUpload && <EditIcon>
            <input accept=".png, jpg, .jpeg" type="file" onChange={handleFileUpload} />
            <label />
            <PreviewComp selectedImage={selectedImage} />
        </EditIcon>}

    </AvatarContainer>
}