This is a simple helper with query strings i've developed for Node.js and Mongodb/Mongoose. For now it conists of a single controller getAllQueryController.
Takes 3 parameters, Model you want to query + req,res

Use is easy:

npm install query-lib-vr

const qsHelper = require('query-lib-vr')

const results = await qsHelper.getAllController(Model, req, res)

Features:

Regex:

Making use of >, >=, <, <= in query strings and translating so MongoDB can read them.

Output would be

my-site.com/api/products?price[gte]=199&price[lte]=499&sort=-quantity

Pagination implemented:
Default Page size display is 5

In practice:

my-site.com/api/items?sort=discount&page=1
(displays first 5 items)
Model(query).skip(0).limit(5)

my-site.com/api/items?sort=discount&page=3
(displays 3. page, skips first 15 products)
