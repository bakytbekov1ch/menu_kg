import axios from "axios";
import React, { useState, forwardRef, useImperativeHandle } from "react";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/chuncurchakKg";

const Ubloading = forwardRef((props, ref) => {
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  useImperativeHandle(ref, () => ({
    uploadFiles: () =>
      new Promise((resolve, reject) => {
        if (!files) {
          setMsg("No image");
          reject("No image");
          return;
        }

        const formData = new FormData();

        for (let i = 0; i < files.length; i++) {
          formData.append(`file${i + 1}`, files[i]);
        }

        setMsg("Uploading...");
        setProgress((prevState) => {
          return { ...prevState, started: true };
        });
        axios
          .post(API, formData, {
            onUploadProgress: (ProgressEvent) => {
              setProgress((prevState) => {
                return { ...prevState, pc: ProgressEvent.progress * 100 };
              });
            },
            headers: {
              "Custom-header": "value",
            },
          })
          .then((res) => {
            setMsg("Upload successful");
            console.log(res.data);
            const urls = res.data.map((file) => file.url); // Assuming the response contains URLs of uploaded files
            resolve(urls);
          })
          .catch((err) => {
            setMsg("Upload failed");
            console.log(err);
            reject(err);
          });
      }),
  }));

  return (
    <div className="apple">
      <h1>Uploading Files in React</h1>

      <input
        onChange={(e) => {
          setFiles(e.target.files);
        }}
        type="file"
        multiple
      />

      {progress.started && <progress max="100" value={progress.pc}></progress>}
      {msg && <span>{msg}</span>}
    </div>
  );
});

export default Ubloading;
