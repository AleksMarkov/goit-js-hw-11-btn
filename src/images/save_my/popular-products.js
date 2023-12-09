import { getPopularProducts } from '../../services/food-api';

const popular = document.querySelector('.popular-list');
const paramDiscount = {
  position: 'top-right',
  timeout: 3000,
  width: '400px',
  fontSize: '30px',
};
let limit = 5;
popular.innerHTML = '';
getPopularProducts(limit)
  .then(data => {
    popular.innerHTML = createMarkup(data);
  })
  .catch(onSearchError);

document.addEventListener('click', function (event) {
  const popularCard = event.target.closest('.popular-list');
  if (popularCard) {
    const productId = popularCard.dataset.productId;
    // productId for call modal window
    // window.location.href = `/products/${productId}`;
    console.log('ID:', productId);
  }
});

function createMarkup(array) {
  return array
    .slice(0, limit)
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
        return `<li class="popular-card" data-product-id="${_id}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" href="#">
                        <img src="${img}" alt="${name}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
                <p class="popular-info-item">${name}</p>
                <p class="popular-category-item">Category: <span>${category.replace(
                  '_',
                  ' '
                )}</span></p>
                <p class="popular-size-item">Size:<span>${size}</span>Popularity:<span>${popularity}</span></p>
				</div>
                <button class="add-popular-button">
					<svg class="popular-icon-button" width="12" height="12">
		 <use href="../../../icons.svg#icon-cart-mob" >
		 </use></svg>
				</button>
            </div>
        </li>`;
      }
    )
    .join('');
}
{
  /* <p class="popular-category-item">Category:${category}</p>; */
}
function onSearchError() {
  Notiflix.Notify.failure(
    'Something went wrong! Please try again.',
    paramDiscount
  );
}
