import { getDiscountProducts } from '../../services/food-api';

const discount = document.querySelector('.discount-list');
const paramDiscount = {
  position: 'top-right',
  timeout: 3000,
  width: '400px',
  fontSize: '30px',
};

discount.innerHTML = '';
getDiscountProducts()
  .then(data => {
    discount.innerHTML = createMarkup(data);
  })
  .catch(onSearchError);

document.addEventListener('click', function (event) {
  const discountCard = event.target.closest('.discount-card');
  if (discountCard) {
    const productId = discountCard.dataset.productId;
    // productId for call modal window
    // window.location.href = `/products/${productId}`;
    console.log('ID:', productId);
  }
});

function onSearchError() {
  Notiflix.Notify.failure(
    'Something went wrong! Please try again.',
    paramDiscount
  );
}

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
               <a class="discount-gallery-link" href="#">
                <img src="${img}" alt="${name}" width="114" height="114" loading="lazy" />
               </a>
			  </div>
			  <div class="discount-product">
              	<p class="discount-info-item">${name}</p>
             	<p class="discount-price-item">${price}</p>
             	<button class="add-cart-button">
					<svg class="icon-button"width="18" height="18">
		 			<use href="../../../icons.svg#icon-cart-mob" >
		 			</use></svg>
				</button>
			  </div>
				<svg class="discount-icon" width="60" height="60">
                <use href="./icons.svg#icon-discount" alt="Discount"></use>
                </svg>
            </div>
          </li>`;
      }
    )
    .join('');
}
