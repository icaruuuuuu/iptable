import Table from './table.js'
const table = new Table();

async function getData(ip) {
	const res = await fetch(`https://ipinfo.io/${ip}/json`);
	if (res.status != 200) {
		window.alert("Sorry, we couldn't fetch this prompt's information.");
		return 0;
	}
	const data = await res.json();

	console.log(data);
	return {
		ip: data.ip,
		org: data.org,
		country: data.country,
		city: data.city,
	};
}

async function addIp() {
	const input = document.getElementById('search');
	const btn = document.getElementById('submission');
	const target = document.getElementById('iptable');
	btn.value="Please wait..."
	const value = input.value
	input.value = "";

	const obj = await getData(value);
	if (obj === 0) {
		input.focus();
		btn.value="Submit";
		return;
	}
	table.add(obj);
	target.innerHTML = table.html();
	input.focus();
	btn.value="Submit";
}

function clearTable() {
	const target = document.getElementById('iptable');
	console.log(table.items);
	table.clear();
	console.log(table.items);
	target.innerHTML = table.html();
}

function removeIp(value) {
	const target = document.getElementById('iptable');
	table.remove(value);
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

document.getElementById('search').addEventListener('keyup', function(event) {
	if (event.key === 'Enter') {
		addIp();
	}
});
