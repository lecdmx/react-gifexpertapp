import React, { useState } from 'react';
// import ReactDom from 'react-dom';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () =>{


	const [categories, setCategories] =  useState(['one punch']);

	// let otroItem = 'otro item';
	// const handleAdd = () => {
	// 	//agregar item al array con funcion callback
	// 	// setCategories ( (c) => ( [ ...c, otroItem ]  ) );
	// 	console.log(categories);
	// 	//agregar item directo al array dentro
	// 	setCategories( [ ...categories, otroItem ]);
	// }

	return (
	  <div>
		<h2>GitExpertApp</h2>
		<AddCategory setCategories = { setCategories }/>
		<hr/>
		
		

		<ol>

				{
					categories.map((category) =>(
						
						<GifGrid 
							key= { category } 
							category = { category }/>

						))
					
				}
			


		</ol>

	  </div>
	);
	
  
  }
