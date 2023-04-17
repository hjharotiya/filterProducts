(async()=>{

const fetchProduct = async () => {
	try {
		const url = "https://fakestoreapi.com/products";
		const res = await fetch(url);
	return await res.json();
	} catch (error) {
		console.log(error);
	}
}

const products = await fetchProduct();

	const genrateProduct = (product) => {
		return `<div class="product-card">
		<div class="image-container">
		  <img
		    src="${product.image}"
		    alt=""
		  />
		</div>
		<div class="product-content">
		      <h4 class="product_heading">
			     ${product.title}
		      </h4>
		      <p class="desc">${product.description}</p>
	      <button class="price_btn">${product.price} $</button> 
	      </div>
	      </div>`
	}
	const productEl=document.querySelector(".product-container")
	const renderProduct = (products) => {
		productEl.innerHTML = "";
		products.forEach((product) => {
			productEl.innerHTML += genrateProduct(product);
		})
	}
	const inputEl = document.querySelector("#product");

	const checkcontent = (contentText, inputText) => {
		// console.log(contentText, inputText);
		return contentText.toString().toLowerCase().includes(inputText)
	}
	
	const filterHandler = (e) => {
		const inputText = e.target.value.toLowerCase();
		const filterProduct = products.filter((product) => {
			// console.log(product.title.toLowerCase().includes(inputText))
			return (
				checkcontent(product.title, inputText) ||
				checkcontent(product.description, inputText) ||
				checkcontent(product.price,inputText )
			);
		})
		console.log(filterProduct);
		renderProduct(filterProduct);
	}
	
	inputEl.addEventListener("keyup", filterHandler)
	
	renderProduct(products);
})()