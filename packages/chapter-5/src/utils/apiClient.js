import Http from "redaxios";

class ApiClient  {
	constructor() {
		this.httpInstance = Http.create({
			baseURL: "http://localhost:8000",
		});
	}

	async get(url, params) {
		return this.httpInstance.get(url, { params });
	}

	async patch(url, body, params) {
		return this.httpInstance.get(url, body, { params }) ;
	}
};

export default ApiClient;