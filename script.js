const lain = document.getElementById('lain');

const isi = document.getElementById('coleps');

function lihat() {
	const tutup = document.getElementById('tutup');
	if (lain) {
		isi.className = 'd-block';
		lain.style.display = 'none';
		tutup.style.display = 'block';
	}
}

function tup() {
	const tutup = document.getElementById('tutup');
	if (tutup) {
		isi.className = 'd-none';
		lain.style.display = 'block';
		tutup.style.display = 'none';
	}
}

document.addEventListener('DOMContentLoaded', function () {
	let elements = document.querySelectorAll('.isi h1');

	let observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		},
		{ threshold: 0 }
	);

	elements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
	let elements = document.querySelectorAll('.isi p');

	let observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		},
		{ threshold: 1 }
	);

	elements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
	let elements = document.querySelectorAll('.carosel');

	let observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				}
			});
		},
		{ threshold: 1 }
	);

	elements.forEach((el) => observer.observe(el));
});

// paralax
document.addEventListener('scroll', function () {
	let banner = document.querySelector('.banner');
	let scrollPos = window.scrollY;
	banner.style.backgroundPositionY = `${-10 + scrollPos * 0.5}px`;
});
