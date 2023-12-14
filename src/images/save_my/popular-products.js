import { getPopularProducts } from '../../services/food-api';
import icons from '/icons.svg';
const popular = document.querySelector('.popular-list');

let limit = 5;
popular.innerHTML = '';
getPopularProducts(limit).then(data => {
  popular.innerHTML = createMarkup(data);
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
        return `<li class="popular-card" data-id="${_id}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${img}" alt="${name}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${name.substring(0, 15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${_id}" id="tocart" >
							<svg class="popular-icon-button" id="tocart" width="18" height="18">
		 					<use href="${icons}#icon-cart-mob" alt ="Add to cart" id="tocart">
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
++++++++++++++++++++++++++++++++++++++
import { getPopularProducts } from '../../services/food-api';
import icons from '/icons.svg';
const popular = document.querySelector('.popular-list');

let limit = 5;
popular.innerHTML = '';
getPopularProducts(limit).then(data => {
	popular.innerHTML = createMarkup(data);
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
				return `<li class="popular-card" data-id="${_id}">
            <div class="popular-img-wrap">
                <div class="popular-left-section">
                    <a class="popular-gallery-link" >
                        <img src="${img}" alt="${name}" width="56" height="56" loading="lazy" />
                    </a>
                </div>
                <div class="popular-center-section">
					<div class="center-section-up">
                		<p class="popular-info-item">${name.substring(0, 15)}</p>
						<button class="add-popular-button add-button" type="button" data-id="${_id}">
							<svg class="popular-icon-button" width="18" height="18">
		 					<use href="${icons}#icon-cart-mob" alt ="Add to cart">
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
