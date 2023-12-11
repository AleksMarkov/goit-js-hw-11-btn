import { getPopularProducts } from '../../services/food-api';
import { clickproduct } from '../../modals/modal-product/modal-product';
const popular = document.querySelector('.popular-list');

let limit = 5;
popular.innerHTML = '';
getPopularProducts(limit).then(data => {
  popular.innerHTML = createMarkup(data);
});

document.addEventListener('click', function (event) {
  const popularCard = event.target.closest('.popular-card');
  if (popularCard) {
    const productId = popularCard.dataset.productId;
    // console.log('ID:', productId);
    clickproduct(productId);
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
                    <a class="popular-gallery-link" >
                        <img src="${img}" alt="${name}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${name}</p>
						<button class="add-popular-button">
							<svg class="popular-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
					</div>
					<div class="center-section-down">
                		<p class="popular-category-item">Category: <span>${category.replace(
                      '_',
                      ' '
                    )}</span></p>
                		<p class="popular-size-item">Size:<span>${size}</span>Popularity:<span>${popularity}</span></p>
					</div>
				</div>
            </div>
        </li>`;
      }
    )
    .join('');
}