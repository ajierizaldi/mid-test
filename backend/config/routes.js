const express = require("express");
const controllers = require("../app/controllers");
const swaggerUi = require("swagger-ui-express");
const apiDocs = require('../app')
// const controllers = require("../app/controllers");
const app = require("../app");


const openApiRouter = express.Router();
const appRouter = express.Router();
const apiRouter = express.Router();

openApiRouter.get("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs));

/** Mount GET / handler */
appRouter.get("/", controllers.main.index);

/**
 * TODO: Implement your own API
 *       implementations
 */

// User API
apiRouter.get("/api/user/:id", controllers.api.v1.userControllers.getProfile);
apiRouter.get("/api/users", controllers.api.v1.userControllers.getAllUsers);
apiRouter.post("/api/register", controllers.api.v1.userControllers.register);
apiRouter.post("/api/login", controllers.api.v1.userControllers.login);

// Product API



/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
appRouter.get("/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

appRouter.use(apiRouter);

/** Mount Not Found Handler */
appRouter.use(controllers.main.onLost);

/** Mount Exception Handler */
appRouter.use(controllers.main.onError);

module.exports = appRouter;
