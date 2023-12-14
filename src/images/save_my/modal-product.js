import { getProductById } from '../../services/food-api';
import icons from '/icons.svg';
const productclick = document.querySelector('.main-container');

function toggleMenu() {
  productmodal.classList.toggle('is-hidden');
}

productclick.addEventListener('click', function (event) {
  const addButton = event.target.closest('.add-button');
  if (addButton) {
    return;
  } else {
    const popularCard = event.target.closest('.popular-card');
    const discountCard = event.target.closest('.discount-card');
    const cardwrapper = event.target.closest('.card-wrapper');
    if (popularCard) {
      const dataIdValue = popularCard.getAttribute('data-id');
      clickproduct(dataIdValue);
    }
    if (discountCard) {
      const dataIdValue = discountCard.getAttribute('data-id');
      clickproduct(dataIdValue);
    }
    if (cardwrapper) {
      const dataIdValue = cardwrapper.getAttribute('data-id');
      clickproduct(dataIdValue);
    }
  }
});

function clickproduct(id) {
  const productmodal = document.getElementById('productmodal');
  getProductById(id).then(({ data }) => {
    productmodal.innerHTML = createModalContent(data);
    openProductModal(productmodal);
  });
}

function openProductModal(productmodal) {
  const closeButton = productmodal.querySelector('.mod-card-close');
  closeButton.addEventListener('click', closeProductModal);
  productmodal.style.display = 'flex';
  toggleMenu();
}

function closeProductModal() {
  const productmodal = document.getElementById('productmodal');
  productmodal.style.display = 'none';
  toggleMenu();
}

function createModalContent(data) {
  return `<div class="modal-2-wrap">
	<div class="modal-img-wrap">
                <div class="modal-img-section">
                    <a class="modal-gallery-link" >
                        <img src="${data.img}" alt="${
    data.name
  }" width="160" height="160" loading="lazy" />
                    </a>
                </div>
                <div class="modal-center-section">
					<div class="modal-section-up">
                		<p class="modal-info-item">${data.name}</p>		
                        <div class="modal-subsection">
                        <p class="modal-category-item">Category: <span>${data.category.replace(
                          '_',
                          ' '
                        )}</span>Size:<span>${data.size}</span></p>
                		<p class="modal-popularity-item"></span>Popularity:<span>${
                      data.popularity
                    }</span></p>
									
					    </div>
                    </div>
					<div class="modal-section-down">
                    <p class="modal-desc-item">${data.desc}</p>
                	</div>
                 </div> 
				</div>
				 <div class="modal-price-button">
                    <p class="modal-info-item">$${data.price}</p>	
                    <button class="modal-button-section add-to-cart" type="button" data-id="${
                      data._id
                    }">
         <span class="button-cart">Add to</span>
        <svg class="modal-icon-button" width="18" height="18">
            <use href="${icons}#icon-cart-mob"></use>
        </svg>
    </button>
                    </div>
				<button class="modal-close-button mod-card-close" type="button">
   				 <svg class="close-sharp">
       				 <use href="${icons}#close-sharp"></use>
     			 </svg>
    			</button>
            </div>`;
}
***********************************************************
import { getProductById } from '../../services/food-api';
import icons from '/icons.svg';
import { onAddButtonClick } from '../../home-content/main-products/main-projects';
const productclick = document.querySelector('.main-container');

productclick.addEventListener('click', onAddButtonClick);
// window.productClick = productClick;
// import { onAddButtonClick } from '../../home-content/main-products/main-projects';
// const productclick = document.querySelector('.main-container');

// function toggleMenu() {
// 	productmodal.classList.toggle('is-hidden');
// }
// productclick.addEventListener('click', clickonProduct);
// async function clickonProduct(event) {
// 	const addButton = event.target.closest('.add-button');
// 	if (addButton) {
// 		const dataIdValue = addButton.getAttribute('data-id');
// 		console.log(dataIdValue);
// 		// return;
// 		onAddButtonClick(dataIdValue);
// 	} else {
// const popularCard = event.target.closest('.popular-card');
// const discountCard = event.target.closest('.discount-card');
// const cardwrapper = event.target.closest('.card-wrapper');
// if (popularCard) {
// 	const dataIdValue = popularCard.getAttribute('data-id');
// 	clickproduct(dataIdValue);
// }
// if (discountCard) {
// 	const dataIdValue = discountCard.getAttribute('data-id');
// 	clickproduct(dataIdValue);
// }
// if (cardwrapper) {
// 	const dataIdValue = cardwrapper.getAttribute('data-id');
// 	clickproduct(dataIdValue);
// 	// }
// }
export async function clickproduct(id) {
	const productmodal = document.getElementById('productmodal');
	getProductById(id).then(({ data }) => {
		productmodal.innerHTML = createModalContent(data);
		openProductModal(productmodal);
	});
	function openProductModal(productmodal) {
		const closeButton = productmodal.querySelector('.mod-card-close');
		closeButton.addEventListener('click', closeProductModal);
		productmodal.style.display = 'flex';
		toggleMenu();
	}
	function closeProductModal() {
		const productmodal = document.getElementById('productmodal');
		productmodal.style.display = 'none';
		toggleMenu();
	}
	function toggleMenu() {
		productmodal.classList.toggle('is-hidden');
	}
}

// function openProductModal(productmodal) {
// 	const closeButton = productmodal.querySelector('.mod-card-close');
// 	closeButton.addEventListener('click', closeProductModal);
// 	productmodal.style.display = 'flex';
// 	toggleMenu();
// }

// function closeProductModal() {
// 	const productmodal = document.getElementById('productmodal');
// 	productmodal.style.display = 'none';
// 	toggleMenu();
// }
// function toggleMenu() {
// 	productmodal.classList.toggle('is-hidden');
// }
// }
// productclick.addEventListener('click', function (event) {
// 	const addButton = event.target.closest('.add-button');
// 	if (!addButton) {
// 		// 	return;
// 		// } else {
// 		const popularCard = event.target.closest('.popular-card');
// 		const discountCard = event.target.closest('.discount-card');
// 		const cardwrapper = event.target.closest('.card-wrapper');
// 		if (popularCard) {
// 			const dataIdValue = popularCard.getAttribute('data-id');
// 			clickproduct(dataIdValue);
// 		}
// 		if (discountCard) {
// 			const dataIdValue = discountCard.getAttribute('data-id');
// 			clickproduct(dataIdValue);
// 		}
// 		if (cardwrapper) {
// 			const dataIdValue = cardwrapper.getAttribute('data-id');
// 			clickproduct(dataIdValue);
// 		}
// 	}
// });

// function clickproduct(id) {
// 	const productmodal = document.getElementById('productmodal');
// 	getProductById(id).then(({ data }) => {
// 		productmodal.innerHTML = createModalContent(data);
// 		openProductModal(productmodal);
// 	});
// }

// function openProductModal(productmodal) {
// 	const closeButton = productmodal.querySelector('.mod-card-close');
// 	closeButton.addEventListener('click', closeProductModal);
// 	productmodal.style.display = 'flex';
// 	toggleMenu();
// }

// function closeProductModal() {
// 	const productmodal = document.getElementById('productmodal');
// 	productmodal.style.display = 'none';
// 	toggleMenu();
// }

function createModalContent(data) {
	return `<div class="modal-2-wrap">
	<div class="modal-img-wrap">
                <div class="modal-img-section">
                    <a class="modal-gallery-link" >
                        <img src="${data.img}" alt="${
		data.name
	}" width="160" height="160" loading="lazy" />
                    </a>
                </div>
                <div class="modal-center-section">
					<div class="modal-section-up">
                		<p class="modal-info-item">${data.name}</p>		
                        <div class="modal-subsection">
                        <p class="modal-category-item">Category: <span>${data.category.replace(
													'_',
													' '
												)}</span>Size:<span>${data.size}</span></p>
                		<p class="modal-popularity-item"></span>Popularity:<span>${
											data.popularity
										}</span></p>
									
					    </div>
                    </div>
					<div class="modal-section-down">
                    <p class="modal-desc-item">${data.desc}</p>
                	</div>
                 </div> 
				</div>
				 <div class="modal-price-button">
                    <p class="modal-info-item">$${data.price}</p>	
                    <button class="modal-button-section add-to-cart" type="button" data-id="${
											data._id
										}">
         <span class="button-cart">Add to</span>
        <svg class="modal-icon-button" width="18" height="18">
            <use href="${icons}#icon-cart-mob"></use>
        </svg>
    </button>
                    </div>
				<button class="modal-close-button mod-card-close" type="button">
   				 <svg class="close-sharp">
       				 <use href="${icons}#close-sharp"></use>
     			 </svg>
    			</button>
            </div>`;
}
