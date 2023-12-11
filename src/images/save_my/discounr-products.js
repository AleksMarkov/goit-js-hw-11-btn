import { getDiscountProducts } from '../../services/food-api';
import { clickproduct } from '../../modals/modal-product/modal-product';
const discount = document.querySelector('.discount-list');

discount.innerHTML = '';
getDiscountProducts().then(data => {
  discount.innerHTML = createMarkup(data);
});

document.addEventListener('click', function (event) {
  const discountCard = event.target.closest('.discount-card');
  if (discountCard) {
    const productId = discountCard.dataset.productId;
    // console.log('ID:', productId);
    clickproduct(productId);
  }
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
        return `<li class="discount-card" data-product-id="${_id}">
            <div class="discount-img-wrap">
			  <div class="discount-top-section">
               <a class="discount-gallery-link" >
                <img src="${img}" alt="${name}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${name}</p>
				<div class="discount-prisce-button">
             	<p class="discount-price-item">${price}</p>
             	<button class="add-cart-button">
					<svg class="discount-icon-button" width="18" height="18">
		 			<use href="../../../icons.svg#icon-cart-mob" alt="cart" >
		 			</use></svg>
				</button>
				</div>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="../../../icons.svg#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`;
      }
    )
    .join('');
}
