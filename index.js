module.exports = {
	async qsHelper(model, req, res) {
		const queryString = { ...req.query };

		// exclude everything other than match field -> later chain methods on found document
		['page', 'sort', 'limit', 'fields', 'skip'].forEach(
			el => delete queryString[el]
		);

		//regEx filtering with >, =>, <, =<
		let match = JSON.stringify(queryString);
		match = match.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

		//get the matched documents from db
		let QUERIES = model.find(JSON.parse(match));

		// Chain  methods
		if (req.query.fields) {
			const fields = req.query.fields.split('_').join(' ');
			QUERIES = QUERIES.select(fields);
		}

		const sort = req.query.sort || {};

		//* PAGINATION

		const PAGE_SIZE = 5;
		const page = req.query.page || 1;
		const limit = req.query.limit || PAGE_SIZE;
		const skip = (page - 1) * PAGE_SIZE || 0;

		//resolve the promise and finish query
		const result = await QUERIES.skip(skip).limit(limit).sort(sort);

		return result;
	},
};
