
import React from 'react'

function Header(props)
{
    console.warn("header", props.data);
    return(
        <div>
            <div className='add-to-cart'>
                <span className='cart-count'>
                    {props.data.length}
                </span>
                {/* <img src="https://cdn.pixabay.com/photo/2018/03/21/21/14/cart-3248232_640.jpg" alt="" /> */}
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt=''/>
            </div>
        </div>
    )
}

export default Header;