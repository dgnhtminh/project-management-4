const systemConfig = require("../../config/system")

const authMidlleware = require("../../middlewares/admin/auth.middleware")

const dashboardRoutes = require("./dashboard.route")
const productRoutes = require("./product.route")
const productCategoryRoutes = require("./product-category.route")
const roleRoutes = require("./role.route")
const accountRoutes = require("./account.route")
const authRoutes = require("./auth.route")
const myAccountRoutes = require("./my-account.route")

module.exports = (app) => {
    const PATH_ADMIN = systemConfig.prefixAdmin;

    app.use(
        PATH_ADMIN + "/dashboard", 
        authMidlleware.requireAuth, 
        dashboardRoutes
    )

    app.use(PATH_ADMIN + "/products", authMidlleware.requireAuth, productRoutes)

    app.use(PATH_ADMIN + "/products-category", authMidlleware.requireAuth, productCategoryRoutes)

    app.use(PATH_ADMIN + "/roles", authMidlleware.requireAuth, roleRoutes)

    app.use(PATH_ADMIN + "/accounts", authMidlleware.requireAuth, accountRoutes)

    app.use(PATH_ADMIN + "/auth", authRoutes)

    app.use(PATH_ADMIN + "/my-account", authMidlleware.requireAuth, myAccountRoutes)
}