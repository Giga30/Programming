import React, { useState, useEffect} from "react";

function Products(){
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all');
    const [disp, setDisp] = useState([]);
    const [input, setInput] = useState('');

    function changeCategory(e){
        setCategory(e.target.value)
        console.log(category);
    }

    useEffect(() => {
        setDisp(products.filter(obj => obj.title.toLowerCase().includes(input)));
    }, [input, products]);

    function changeInput(e) {
        const inputValue = e.target.value;
        setInput(inputValue);
    }

    useEffect(() => {
        if(category === 'all'){
            fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisp(data);
            });
        }else{
            fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisp(data);
            });
        }

        
    }, [category]);

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisp(data);
        });
    }, [])

    return(
        <>
            <div className="mt-24 w-screen flex justify-center">
                <input className="border-2 border-black rounded-full w-80 inline-block p-1" placeholder="search" onChange={changeInput} value={input}></input>
                <select onChange={changeCategory}>
                    <option value='all'>All</option>
                    <option value='electronics'>Electronics</option>
                    <option value='jewelery'>Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>
            </div>
            <div className="grid gap-8 grid-cols-5 mt-11 w-11/12 mx-auto">
                {disp.map(e => {
                    return (
                        <div className="bg-sky-600 w-72 h-96 p-5 mx-auto rounded-md flex flex-col justify-between" key={e.id}>
                            <div>
                                <div className="flex justify-center bg-white rounded-lg">
                                    <img className='h-36 inline-block rounded-lg' src={e.image} alt={e.title}></img>
                                </div>
                                <p>{e.title}</p>
                            </div>
                            <div>
                                <p>Price: <span className="font-bold text-green-400">${e.price}</span></p>
                                <button className="bg-slate-600 p-1 w-24 rounded-md">Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Products