import { getProductById } from '../../services/food-api';

export function clickproduct(id) {
  const productmodal = document.getElementById('productmodal');
  // console.log('ID:', id);

  getProductById(id).then(({ data }) => {
    // console.log(data);
    productmodal.innerHTML = createModalContent(data);
    openProductModal(productmodal);
  });
}

function openProductModal(productmodal) {
  const closeButton = document.createElement('button');
  closeButton.classList.add('modal-close-button');
  closeButton.innerHTML = 'Close';
  closeButton.addEventListener('click', closeProductModal);
  productmodal.appendChild(closeButton);
  productmodal.style.display = 'flex';
}

function closeProductModal() {
  const productmodal = document.getElementById('productmodal');
  productmodal.style.display = 'none';
}

function createModalContent(data) {
  return `<div class="modal-img-wrap">
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
                    <p class="modal-desc-item">${data.desc.substring(
                      0,
                      320
                    )}</p>
                	</div>
                    <div class="modal-price-button">
                    <p class="modal-info-item">${data.price}</p>	
                    <button class="modal-button-section">
							<svg class="modal-icon-button" width="12" height="12">
		 					<use href="../../../icons.svg#icon-cart-mob" >
		 					</use>
							</svg>
						</button>
                    </div>
				</div>
            </div>`;
}
