import React from 'react'
import { useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideoAPI } from '../services/allAPI';

function Add({setAddVideoResponse}) {
    const [videoDetails,setVideoDetails] = useState({
     caption : "",
     imageURL: "",
     youtubeURL : ""
    })
    const [invalidYoutubeUrl,setInvalidYoutubeUrl]= useState(false)
    // link is e.target.value which is a string
    const getEmbedURL=(link)=>{
        if(link.includes("v=")){
         let videoId = link.split("v=")[1].slice(0,11)
         console.log(videoId);
         setVideoDetails({...videoDetails,youtubeURL:`https://www.youtube.com/embed/${videoId}`})
         setInvalidYoutubeUrl(false);
        }
        else{
            setVideoDetails({...videoDetails,youtubeURL:""})
            setInvalidYoutubeUrl(true);
        }

    }
    console.log(videoDetails);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleUpload = async ()=>{
        console.log("Inside upload")
        // const {key1,key2} = object-name destructuring
        const {caption,imageURL,youtubeURL} = videoDetails;
         if(caption && imageURL && youtubeURL ){
           console.log("api call");
           try{
             const result = await addVideoAPI(videoDetails)
             console.log(result);
             if(result.status>=200 && result.status<300){
                console.log(result.data);
                setAddVideoResponse(result.data)
                setVideoDetails({caption:"",imageURL:"",youtubeURL:""})
                toast.success(`${result.data.caption} is added to your collection!!!`)
                handleClose()
             }else{
                toast.error(result.response.data)
             }
           }catch(err){
             console.log(err);
           }
         }else{
            toast.warning("Please fill the form completely!!!")
         }
    }
    return (
        <>
            <div className="d-flex align-items-center">
                <h5>Upload new videos</h5>
                <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Video Details!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the following details!!!</p>
                 <div className='border rounded p-3'>
                        <FloatingLabel
                            controlId="floatingInputCaption"
                            label="Video Caption"
                            className="mb-3"
                        >
                            <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputImage"
                            label="Image URL"
                            className="mb-3"
                        >
                            <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageURL:e.target.value})} type="text" placeholder="Image URL" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInputURL"
                            label="YouTube URL"
                            className="mb-3"
                        >
                            <Form.Control onChange={e=>getEmbedURL(e.target.value)} type="text" placeholder="YouTube URL" />
                        </FloatingLabel>
                       {invalidYoutubeUrl&&
                       <div className="text-danger fw-bolder">Invalid Youtube URL</div>

                       }
                 </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} className='btn btn-info'>Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
        </>
    )
}

export default Add