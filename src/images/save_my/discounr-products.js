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

function createMarkup(array) {
  return array
    .slice(0, 2)
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
			<svg class="discount-icon" width="60" height="60">
				<use href="./icons.svg#icon-discount"></use>
			</svg>
                <a class="discount-gallery-link" href="#">
                    <img src="${img}" alt="${name}" width="114" height="114" loading="lazy" />
                </a>
                <p class="discount-info-item">${name}</p>
				<p class="discount-price-item">${price}</p>
				<button class="add-cart-button">
					<img src="cart_icon.png" alt="Add to Cart" />
				</button>
            </div>
        </li>`;
      }
    )
    .join('');
}

function onSearchError() {
  Notiflix.Notify.failure(
    'Something went wrong! Please try again.',
    paramDiscount
  );
}
