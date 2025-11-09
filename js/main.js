import Table from './table.js'
const table = new Table();


function addIp() {
	const input = document.getElementById('search'); 
	const target = document.getElementById('iptable');
	table.add(input.value);
	target.innerHTML = table.html();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-submit').addEventListener('click', addIp);
});
