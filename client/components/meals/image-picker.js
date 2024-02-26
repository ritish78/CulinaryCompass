"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

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

        // Creating form data which will store the image
        const formData = new FormData();
        formData.append('file', image);

        // To display image in preview to user before uploading
        // to cloudinary. Also makes the app feel more responsive.
        const fileReader = new FileReader();
        fileReader.onload = () => {
            if (typeof fileReader.result === 'string') {
                setPickedImage(fileReader.result);
            }
        }
        fileReader.readAsDataURL(image);

        //Now finally uploading the image to cloudinary
        fetch('/api/upload/meal/image', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                /*
                    We get the url of the uploaded image as:
                    {
                        imageUrl: "Link to the image" 
                    }
                    Once we get the cloudinary image link, we can change
                    the image preview from FileReader's Data URL to
                    cloudinary URL. 

                    However, it will create another traffic in the network.
                    Or, we could remove the below setPickedImage(data.imageUrl)
                    and use FileReader as it was and use Toast to notify user
                    that image has been uploaded successful!

                */
                setPickedImage(data.imageUrl);
            });
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{ label }</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    { !pickedImage && <p>No image picked yet.</p> }
                    {
                        pickedImage && (
                            <Image
                                src={pickedImage}
                                alt="Image picked by the user."
                                fill
                            />
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