import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'

import './index.css'
import './Todo.css'


const reducer = (state, action)=>{
  if(action.type === 'ADD_ITEM') {
    let newItems = [...state.items, action.payload]
    return {
      ...state, items:newItems, isModalOpen:true, modalContent:'Item Added'
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state, isModalOpen:true, modalContent:'No value is provided'
    }
  }
  if (action.type==='CLOSE_MODAL') {
    return {...state, isModalOpen:false, modalContent:''}
  }
  if (action.type==='REMOVE_USER') {
    let newItems = state.items.filter(item=>{
      return item.id !== action.payload
    })
    return {...state, items:newItems, isModalOpen:true, modalContent:`Item is succesfully removed`}
  }

  if(action.type==='CLEAR_USERS') {
    return {...state, items:[],isModalOpen:true, modalContent:'Items List is successfully cleared'}
  }
  throw new Error('No matching error type')  
}

const defaultState = {
  items:JSON.parse(window.localStorage.getItem('items')) || '',
  isModalOpen:false,
  modalContent:''
}

const TodoList =()=>{

  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('');
  const [state, dispatch] = React.useReducer(reducer, defaultState)
  const [total, setTotal] = React.useState(0)

  React.useEffect(()=>{
    if (state.items.length > 1) {
      let newTotal = state.items.reduce((totalValue,item)=> Number(totalValue + parseInt(item.price)), 0)
      setTotal(newTotal)
    }
    if(state.items.length === 1) {
      setTotal(state.items[0].price)
    }
    if(state.items.length === 0) {
      setTotal(0)
    }
  },[state.items]) 
  
  React.useEffect(()=>{
    window.localStorage.setItem('items', JSON.stringify(state.items))
  },[state.items])

  const changeHandler=(e)=>{
    e.preventDefault()
    if (name && price) {
      let newItems = {id:`item${name}`, name, price}
      dispatch({type:'ADD_ITEM', payload:newItems})
    }
    else {
      dispatch({type:'NO_VALUE'})
    }
    setName('')
    setPrice('')
  }

  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'})
  }

  const deletePerson=(id)=>{
    dispatch({type:'REMOVE_USER', payload:id})
  }

  return (
    <div className='container'>
      <div className='title'>Muyiwa's Shopping List</div>
      <div>{state.isModalOpen && <Modal modalContent={state.modalContent} closeModal ={closeModal}/>}</div>

      <div>

        <form className='form'>
          <div className='inputs-container'>
            <div className='item-container'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' className='inputs' placeholder='Enter the name of the item' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='item-container'>
              <label htmlFor='price'>Price:</label>
              <input type='number' id='price' placeholder='Set the price of the item' className='inputs' value={price} onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <button type='submit' className='btn' onClick={changeHandler}>Submit</button>
          </div>
        </form>

        <div className='items-display'>
          {state.items.map((item, index)=>{
            return (
              <div key={item.id} className='item-display'>
                <p className='numerator'>{(index + 1)<10 ? '0'+(index + 1) : (index + 1)}</p>
                <p className='name-item'>{item.name}</p>
                <p>{item.price}</p>
                <button type='button' className='btn' id="del" onClick={()=>deletePerson(item.id)}>Delete</button>
              </div>
            )
          })}
        </div>
        {`Total amount is #${total}`}
        {state.items.length > 0 && <button style={{display:'block', marginLeft:'auto'}} className='btn' id='del' onClick={()=>{dispatch({type:'CLEAR_USERS'})}}>Clear Items</button>}
      </div>
    </div>
  )
}

ReactDOM.render(<TodoList/>, document.querySelector('#root'))