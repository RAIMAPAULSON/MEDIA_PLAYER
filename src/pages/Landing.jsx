import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music_beat.gif'
import mic from '../assets/mic.png'
import drum from '../assets/drum.png'
import speakers from '../assets/speakers.jpg'
import {Card} from 'react-bootstrap'
function Landing() {
  return (
    <>
    <div className='landingsection container'>
      <div className="row align-items-center my-5">
        <div className="col-lg-5">
          <h3>
            Welcome to <span className='text-warning'>Media Player</span>
          </h3>
          <p className='mt-3' style={{textAlign:'justify'}}>Media Player App will allow user to add or remove
          their uploaded videos and also arrange them in different categories by drag and drop.User can also
          have the provision to manage their watch history as well.What are you waiting for,let us start exploring
          our site!!!</p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6 p-3">
          <img className='ms-5' src={landingImg} alt="landing page" />
        </div>
      </div>
      {/* features */}
      <div className="Features my-5">
      <h3 className='text-center'>Features</h3>
      <div className="row mt-5">
        <div className="col-lg-4">
        <Card style={{ width: '20rem',height: '400px' }} className='p-2'>
      <Card.Img variant="top" style={{height:'260px'}} className='img-fluid' src={mic}/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Users can upload,view and remove the videos
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '20rem',height: '400px' }} className='p-2'>
      <Card.Img variant="top" style={{height:'260px'}} className='img-fluid' src={drum}/>
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Users can categorize the videos by drag and drop features
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{ width: '20rem',height: '400px' }} className='p-2'>
      <Card.Img variant="top" style={{height:'260px'}} className='img-fluid' src={speakers}/>
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage watch history of all the videos
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
      </div>
      {/* videos and text */}
      <div className="my-5 row border rounded p-5">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple,fast and Powerful</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores explicabo vel! Nisi labore corrupti voluptatem aliquam! Nisi cupiditate
         </p>
         <p style={{textAlign:'justify'}}><span className='fs-5'>Categorize Videos:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores explicabo vel! Nisi labore corrupti voluptatem aliquam! Nisi cupiditate
         </p>
         <p style={{textAlign:'justify'}}><span className='fs-5'>Managing History:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores explicabo vel! Nisi labore corrupti voluptatem aliquam! Nisi cupiditate
         </p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    </>
  )
}

export default Landing