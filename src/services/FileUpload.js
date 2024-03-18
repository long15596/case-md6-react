
import { initializeApp } from "firebase/app";
import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDi3k1wLzdUDz_UPUeuKatQBGvdcuMjPrQ",
    authDomain: "case-md6-68a8f.firebaseapp.com",
    projectId: "case-md6-68a8f",
    storageBucket: "case-md6-68a8f.appspot.com",
    messagingSenderId: "175511547154",
    appId: "1:175511547154:web:57ebb36215dfe8983357cb",
    measurementId: "G-PM3PDD7DJT"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function FileUpload() {
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);
    const [fileUrls, setFileUrls] = useState([]);
    const handleChange = (e) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            setFiles(selectedFiles);
        }
    };
    const handleUpload = () => {
        if (!files) {
            console.log("Please select a file.");
            return;
        }
        files.forEach((file) => {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            console.log(file)
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        console.log(url);
                        setFileUrls(prevUrls => [...prevUrls, url]);
                    });
                }
            );
        })
    };
    return (
        <>
            <div className="mb-3">
                <label htmlFor="formFile" className="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile" onChange={handleChange} multiple/>
                <button onClick={handleUpload}>Upload</button>
                <div>{progress}% Uploaded</div>
                {fileUrls.map((url, index) => (
                    <img src={url} className="img-thumbnail" alt="..." style={{height: '200px', width: '200px'}}/>
                ))}
            </div>
        </>
    );
}

export default FileUpload;
