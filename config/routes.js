const admin = require('./admin')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.user.save))
        .get(admin(app.api.user.get))

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(app.api.user.saveById)
        .get(app.api.user.getById)
        .delete(app.api.user.removeById) // verificar se é o usuario logado

    app.route('/user/:id/upload-image')
        .all(app.config.passport.authenticate())
        .post(app.api.user.saveByIdImage)
    // app.route('user/:id/articles')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.article.get)
    // .get(app.api.article.getByUser)

    app.route('/user/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByUser)

    app.route('/user/:id/categories')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getByUser)

    // app.route('user/:id/articles')
    //     .all(app.config.passport.authenticate())
    //     // .get(admin(app.api.article.get))
    //     .get(app.api.article.getByUser) //temporario
    //     // .post(admin(app.api.article.save))
    //     .post(app.api.article.save)

    // app.route('user/:id/article/:id')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.article.getByUserById)
    //     // .put(admin(app.api.article.save))
    //     .put(app.api.article.save) //temporario
    //     .delete(admin(app.api.article.remove))

    app.route('/categories')
        .all(app.config.passport.authenticate())
        // .get(admin(app.api.category.get))
        .get(app.api.category.get)
        // .put(admin(app.api.category.save))
        .post(admin(app.api.category.save))

    // Cuidado com ordem! Tem que vir antes de /categories/:id
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/category/name/:id')
        .all(app.config.passport.authenticate())
        // .get(app.api.category.getById)
        .put(admin(app.api.category.saveName))
    // .delete(admin(app.api.category.remove))

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))

    app.route('/articles')
        .all(app.config.passport.authenticate())
        // .get(admin(app.api.article.get))
        // .get(app.api.article.get) //temporario
        .get(app.api.article.get)
        // .post(admin(app.api.article.save))
        .post(app.api.article.save)

    // app.route('user/:id/articles')
    //     .get(app.api.article.getByUser)

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        // .get(app.api.article.getByUser)
        // .put(admin(app.api.article.save))
        .put(app.api.article.save) //temporario
        .delete(app.api.article.remove)

    // app.route('/user/:id/articles')
    //     .all(app.config.passport.authenticate())
    //     // .get(app.api.article.getById)
    //     .get(app.api.article.getByUser)
    // .put(admin(app.api.article.save))
    // .put(app.api.article.save) //temporario
    // .delete(admin(app.api.article.remove))

    // app.route('user/:id/articles')
    //     .all(app.config.passport.authenticate())
    //     // .get(admin(app.api.article.get))
    //     .get(app.api.article.get) //temporario
    //     // .post(admin(app.api.article.save))
    //     .post(app.api.article.save)

    // app.route('user/:id/articles/:id')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.article.getById)
    //     // .put(admin(app.api.article.save))
    //     .put(app.api.article.save) //temporario
    //     .delete(admin(app.api.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

    // app.route('/stats')
    //     .all(app.config.passport.authenticate())
    //     .get(app.api.stat.get)
}