//Server config
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout.ejs')
app.use(expressLayouts)