import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) =>{
    const {id, name, price, imageUrl} = item;
    return(
    <div className='collection-item' key={id}>
        <div className='image' style={{backgroundImage: `url(${imageUrl})`}}>

        </div>
        <div className='collection-footer'>
            <span className='name'> {name} </span>
            <span className='price'>$ {price} </span>           
        </div>
        <div className='button'>
             <CustomButton inverted onClick={()=>addItem(item)}>Add to cart</CustomButton>
        </div>
       
    </div>
)}
const MapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, MapDispatchToProps)(CollectionItem);