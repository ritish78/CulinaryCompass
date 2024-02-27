"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState([]);

    const imageInputRef = useRef();

    const handleMealSubmission = () => {
        imageInputRef.current.click();
    }

    const handleImageChange = (event) => {
        const image = event.target.files[0];

        if (!image) {
            setPickedImage([]);
            return;
        }

        // Creating form data which will store the image
        const formData = new FormData();
        formData.append('file', image);
        

        // To display image in preview to user before uploading
        // to cloudinary. Also makes the app feel more responsive.
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                setPickedImage([ ...pickedImage, fileReader.result]);
            }
        }
        fileReader.readAsDataURL(image);

        
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{ label }</label>
            <div className={classes.controls}>
                <div className={classes.previewContainer}>
                    { pickedImage.length === 0 && <p className={classes.preview}>No image picked yet.</p> }
                    {
                        pickedImage.length > 0 && (
                            pickedImage.map((image, index) => 
                                <div className={classes.preview} key={index}>
                                    <Image
                                        src={image}
                                        alt="Image picked by the user."
                                        fill
                                    />
                                </div>
                            )
                        )
                    }
                </div>
                <input
                    className={classes.input} 
                    type="file" 
                    id={name} 
                    accept="image/png, image/jpeg, image/jpg, image/webp, image/gif" 
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                 <button
                    className={classes.button}
                    type="button"
                    onClick={handleMealSubmission}
                >
                    Pick an image
                </button>
            </div>
        </div>
    )
}