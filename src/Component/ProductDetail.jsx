import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/Contextapi'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
    let { id } = useParams()
    let { Product, setProduct } = useContext(AuthContext)
    let navigate = useNavigate()

    useEffect(() => {
        const fetchSingleProdutDetail = async () => {
            try {
                let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSingleProdutDetail()
    }, [id])

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center px-4 py-10'>

            
            <div className='w-full max-w-4xl mb-4'>
                <button
                    onClick={() => navigate('/shop')}
                    className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition'
                >
                    ← Back to Shop
                </button>
            </div>

    
            <div className='bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 flex flex-col gap-6'>

            
                <div className='w-full flex justify-center items-center bg-gray-50 rounded-xl p-6'>
                    <img
                        src={Product?.image}
                        alt={Product?.title}
                        className='max-h-[300px] object-contain'
                    />
                </div>

        
                <div className='border-t'></div>

        
                <div className='flex justify-between items-start gap-6 flex-wrap'>

        
                    <div className='flex flex-col gap-3 max-w-xl'>
                        <h2 className='text-2xl font-semibold text-gray-800'>
                            {Product?.title}
                        </h2>

                        <p className='text-gray-600 text-sm leading-relaxed'>
                            {Product?.description}
                        </p>

                        <p className='text-2xl font-bold text-green-600'>
                            $ {Product?.price}
                        </p>
                    </div>

            
                    <div className='flex items-start'>
                        <button className='bg-green-600 hover:bg-green-700 transition px-8 py-3 rounded-xl text-lg text-white shadow-md'>
                            Add to Cart
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductDetail