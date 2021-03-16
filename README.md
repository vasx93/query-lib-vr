This is a simple helper with query strings i've developed for Node.js and Mongodb/Mongoose. For now it conists of a single controller getAllQueryController.
Takes 3 parameters, Model you want to query + req,res

Use is easy:

const results = await getAllQueryController(Model, req, res)

Features:

Regex:
const match = match.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)

Output would be
http://my-site/api/products?price[gte]=99&price[lte]=299&sort=-quantity

Pagination implemented:
Default Page size display is 5

http://my-site/api/items?sort=discount&fields=name_price_quantity&limit=10&page=1
