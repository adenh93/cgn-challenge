import * as productSagas from "./products/sagas";
import { SagaMiddleware } from "@redux-saga/core";

const sagas = {
  ...productSagas
};

const initSagas = (sagaMiddleware: SagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default initSagas;
