import Table from './table.js'
const table = new Table();


function addIp() {
	const input = document.getElementById('search'); 
	const target = document.getElementById('iptable');
	table.add(input.value);
	target.innerHTML = table.html();
}

function clearTable() {
	const target = document.getElementById('iptable');
	console.log(table.items);
	table.clear();
	console.log(table.items);
	target.innerHTML = table.html();
}

function removeIp(value) {
	const target = document.getElementById('iptable')
	table.remove(value)
	target.innerHTML = table.html();
}

document.addEventListener('click', function(event) {
	if (event.target.classList.contains('btn-remove')) {
		const btn = event.target;
		removeIp(btn.dataset.index);
	}

	if (event.target.classList.contains('btn-submit')) {
		addIp();
	}

	if (event.target.classList.contains('btn-clear')) {
		clearTable();
	}

});
