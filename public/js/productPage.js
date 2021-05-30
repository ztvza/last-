const buyProductModal = new bootstrap.Modal(document.getElementById('buyProductModal'));

function addToCart(product) {
	let finalPrice = product.price - product.discount;

	const extraAccumulator = document.getElementById('extraAccumulator').checked;
	const extraBlades = document.getElementById('extraBlades').checked;

	if (extraAccumulator) {
		finalPrice += product.extraAccumulatorPrice;
	}

	if (extraBlades) {
		finalPrice += product.extraBladesPrice;
	}

	document.getElementById('finalPrice').innerText = `${finalPrice}₽`

	buyProductModal.show();
}

function closeModal() {
	buyProductModal.hide();
}

function sendPurchaseRequest(product) {
	const name = document.getElementById('name').value;
	const phone = document.getElementById('phone').value;
	const email = document.getElementById('email').value;

	if (!name || !email || !phone) {
		alert('Заполните строку пожалуйста!')
	}

	const extraAccumulator = document.getElementById('extraAccumulator').checked;
	const extraBlades = document.getElementById('extraBlades').checked;

	axios.post(
		'/api/createPurchaseRequest',
		{
			name,
			email,
			phone,
			product: product.id, 
			extraAccumulator,
			extraBlades

		}
	)
	.then(response => {
		alert('Спасибо');
		closeModal();
	})

	.catch(err => {
		console.error(err);
	})

}