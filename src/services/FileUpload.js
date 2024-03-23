
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

function FileUpload({onUpload}) {
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
        files.forEach((file) => {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setFileUrls(prevUrls => [...prevUrls, url]);
                        onUpload(fileUrls)
                    });
                }
            );
        })
    };
    return (
        <>
            <div className="input-group">
                <input type="file" className="form-control" id="inputGroupFile04"
                       aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleChange} multiple/>
                <button className="btn btn-primary px-3 d-none d-lg-flex" type="button" id="inputGroupFileAddon04" onClick={handleUpload}>Upload</button>
            </div>
            <div>{progress}% Uploaded</div>
        </>
    );
}
export default FileUpload;
