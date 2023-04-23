import React from 'react'
import {BiPlus} from 'react-icons/bi'
import './Mywork.css';
import { useEffect,useState } from 'react';
import {useForm} from 'react-hook-form';
import { Modal,Button } from 'react-bootstrap'
import { BsCloudUploadFill } from "react-icons/bs";
import axios from 'axios';

function Mywork() {
  let[err,seterr]=useState([]);
  let{register,handleSubmit,formState:{errors}}=useForm();
  let [show,setshow]=useState(false);
  let showModal=()=>setshow(true);
  let [flag,setflag]=useState(false);
  let[todos,settodos]=useState([]);
  
  let addnewtodo=(newtodo)=>{
    console.log(newtodo);
    
    setflag(true);
    axios.post("http://localhost:4000/todos",newtodo)
    .then(response=>{
      if(response.status===200)
      {
        seterr="";
      }
      console.log(response)
    })
    .catch(err=>{
      console.log(err);
      if(err.response)
      {
        seterr(err.message);
      }
      else if(err.request)
      {
        seterr(err.message);
      }
      else{
        seterr(err.message);
      }
    })
    

  }
  useEffect(()=>{
    gettodos();
  },[])

 

  //to get todos
  let gettodos=()=>{
    console.log("Got todo")
    axios.get("http://localhost:4000/todos")
    .then(response=>{
      if(response.status===200)
      {
        settodos(response.data);
      }
    })
    .catch(err=>{
      console.log(err);
      if(err.response)
      {
        seterr(err.message);
      }
      else if(err.request)
      {
        seterr(err.message);
      }
      else{
        seterr(err.message);
      }
    })
    
    setflag(false);
    console.log(flag);
  }
 
  let closeModal=()=>{
    setshow(false);
  }

  return (
    <div className='mainwork'>
      <div className='container-fluid workbox '>
      <h1 className='heading text-center'>FLASH CARDS</h1>
      {err.length!==0 && <p className='display-1 bold text-danger'>{err}</p>}
      {flag===true && gettodos()}
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mx-auto flashcards'>
        {
          todos?.map((todoobj)=>
          <div className='col mx-auto ' key={todoobj.id}>
            <div className='cards'>
              <img src={todoobj.image} className='mx-auto p-3 image'></img>
              <div className='text-center'>
                <p className='lead'>{todoobj.question}</p>
                <p className='lead'>{todoobj.answer}</p>
              </div>
            </div>
          </div>
            )
        }

      </div>
      <button className='btn btn-dark add' onClick={showModal}><BiPlus></BiPlus>Add Card</button>
      <Modal show={show} onHide={closeModal} backdrop="static" centered className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Add Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(addnewtodo)}>
            <div className='mb-3'>
              <label>Question</label>
              <input type="text" id="question" className='form-control'{...register("question")}></input>
            </div>
            <div className='mb-3'> 
              <label >Answer</label>
              <input type="text" id="answer" className='form-control'{...register("answer")}></input>
            </div>
            <div className='mb-3'>
              <label>Upload image URL<BsCloudUploadFill></BsCloudUploadFill></label>
              <input type="text" id="image" className='form-control' {...register("image")} ></input>
            </div>
            <button className='btn btn-dark mb-3' type="submit" onClick={closeModal}>Add</button>
            <Button variant="dark" className='mx-3 mb-3' onClick={closeModal}>Cancel</Button>
          </form>
          
        </Modal.Body>
      </Modal>
      </div>
    </div>
  )
}

export default Mywork