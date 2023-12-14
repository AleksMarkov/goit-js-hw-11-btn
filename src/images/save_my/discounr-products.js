import { getDiscountProducts } from '../../services/food-api';
import icons from '/icons.svg';
const discount = document.querySelector('.discount-list');

discount.innerHTML = '';
getDiscountProducts().then(data => {
  discount.innerHTML = createMarkup(data);
});

function getRandomElements(array, count) {
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
}

function createMarkup(array) {
  const selectedElements = getRandomElements(array, 2);

  return selectedElements
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        is10PercentOff,
        popularity,
      }) => {
        return `<li class="discount-card" data-id="${_id}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${img}" alt="${name}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${name}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${price}</p>
             	<button class="add-discount-button add-button" type="button" data-id="${_id}" id="tocart">
							<svg class="discount-icon-button" id="tocart" width="18" height="18">
		 					<use href="${icons}#icon-cart-mob" alt ="Add to cart" id="tocart">
		 					</use>
							</svg>
						</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="${icons}#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`;
      }
    )
    .join('');
}
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { getDiscountProducts } from '../../services/food-api';
import icons from '/icons.svg';
const discount = document.querySelector('.discount-list');

discount.innerHTML = '';
getDiscountProducts().then(data => {
	discount.innerHTML = createMarkup(data);
});

function getRandomElements(array, count) {
	const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
	return shuffledArray.slice(0, count);
}

function createMarkup(array) {
	const selectedElements = getRandomElements(array, 2);

	return selectedElements
		.map(
			({
				_id,
				name,
				img,
				category,
				price,
				size,
				is10PercentOff,
				popularity,
			}) => {
				return `<li class="discount-card" data-id="${_id}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${img}" alt="${name}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${name}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">$${price}</p>
             	<button class="add-discount-button add-button" type="button" data-id="${_id}">
							<svg class="discount-icon-button" width="18" height="18">
		 					<use href="${icons}#icon-cart-mob" alt ="Add to cart">
		 					</use>
							</svg>
						</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="${icons}#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`;
			}
		)
		.join('');
}
