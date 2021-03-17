This is a simple Node.js MongoDB document Query String Helper I've built.
Works with: fields, page, skip limit, sort(asc/desc). Aslo enables the use of equality operators($gt, $gte, $lt, $lte). Takes in 3 parameters: qsHelper(model, req, res), returns the queried documents.

Install:

Install via npm package manager
npm install query-lib-vr

Require it on the top of the file
const { qsHelper } = require('query-lib-vr')

Use:
const results = await qsHelper(Model, req, res)

Features:

Regex

Making use of equality operators >, >=, <, <= in query strings and translating so MongoDB can read them.

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
