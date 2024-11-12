const CategoryMiddleware = require("../../middlewares/client/category.middleware")

const homeRoutes = require("./home.route")
const productRoutes = require("./product.route")


module.exports = (app) => {
    app.use(CategoryMiddleware.category)

    app.use('/', homeRoutes)
 
    app.use('/products', productRoutes)
}