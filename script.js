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
