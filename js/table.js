class Table {
	constructor() {
		this.items = [];
	}

	add(value) {
		this.items.push({
			ip: value,
			org: "teste",
			country: "teste",
			city: "teste"
		});
	}

	remove(index) {
		this.items.splice(index,1);
	}

	clear() {
		this.items.splice(0,this.items.length);
	}

	html() {
		let html = `<div class="table-h row">
			<div class="column-1">IP</div>
			<div class="column-1">Org</div>
			<div class="column-1">Country</div>
			<div class="column-1">City</div>
			<div class="column-1">
			<input type="button" class="btn-clear" value="Clear"/>
			</div>
		</div>\n`

		for (let i = 0; i < this.items.length; i++) {
			html += `<div class="table-r row invert">\n`
			html += `<div class="column-1 invert">${this.items[i].ip}</div>`
			html += `<div class="column-1 invert">${this.items[i].org}</div>`
			html += `<div class="column-1 invert">${this.items[i].country}</div>`
			html += `<div class="column-1 invert">${this.items[i].city}</div>`
			html += `<div class="column-1"><button class="btn-remove" data-index="${i}">X</button></div>`
			html += `</div>\n`
		}
		html += `<div class="table-t row"></div>`
		return html;
	}
}

export default Table;
