const app = require("./api");
const repository = require("./repository");



app.listen(8081, () => {
    console.log('Starting RESTful API');
    repository.initWithSomeData();
});