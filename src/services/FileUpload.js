import {initializeApp} from "firebase/app";
import React, {useState} from 'react';
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";

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
    const handleUpload = async () => {
        let uploadedUrls = [];
        for (const file of files) {
            const storageRef = ref(storage, `files/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            await new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        setProgress(progress);
                    },
                    reject,
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                            uploadedUrls.push(url);
                            resolve();
                        }).catch(reject);
                    }
                );
            });
        }
        setFileUrls(uploadedUrls);
        onUpload(uploadedUrls);
    };

    return (
        <>
            <input type="file" className="form-control" id="inputGroupFile04"
                   aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={handleChange} multiple style={{width:" 304px",
                marginLeft: "133px"}}/>
            <div style={{marginTop:"20px" , marginBottom:"20px"}}>{progress}% Uploaded</div>
            <button className="btn btn-primary" type="button" onClick={handleUpload}>Upload new image</button>
        </>
    );
}

export default FileUpload;
