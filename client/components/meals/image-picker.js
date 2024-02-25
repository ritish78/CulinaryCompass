"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState();

    const imageInputRef = useRef();

    const handleMealSubmission = () => {
        imageInputRef.current.click();
    }

    const handleImageChange = (event) => {
        const image = event.target.files[0];

        if (!image) {
            setPickedImage(null);
            return;
        }

        //Creating form data which will store the image
        const formData = new FormData();
        formData.append('image', image);

        //Now finally uploading the image to cloudinary
        fetch('/api/upload/meal/image', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => console.log(data))


        // const fileReader = new FileReader();

    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{ label }</label>
            <div className={classes.controls}>
                <input
                    className={classes.input} 
                    type="file" 
                    id={name} 
                    accept="image/png, image/jpeg, image/jpg, image/webp, image/gif" 
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
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