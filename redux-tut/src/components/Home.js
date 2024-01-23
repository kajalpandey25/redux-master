import React from 'react'

function Home(props)
{
    console.warn("home", props.data);
    return(
        <div>
            <div className='add-to-cart'>
                <img src="https://cdn.pixabay.com/photo/2018/03/21/21/14/cart-3248232_640.jpg" alt="" />

            </div>
            <h1>Home Component</h1>
            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                <img src="https://media.istockphoto.com/id/892245888/photo/new-iphone-x.jpg?s=612x612&w=0&k=20&c=uX-QNxZh-rYIT7Yclseh3UdpJyNOgDLKVMoAWdC1-AM=" alt="iPhone" />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button 
                    onClick={()=>
                     props.addToCartHandler({price:1000,name:'I Phone 11'})
                    }>Add To Card</button>
                </div>
            </div>
        </div>
    )
}

export default Home;