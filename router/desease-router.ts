import { Router } from "express";
import {
  SelectAll,
  SelectDesease,
  CreateDesease,
  UpdateDesease,
  DeleteDesease,
} from "../controller/desease-ctrl";

const deseaseRouter = Router();

// SelectAll,
// SelectDesease,
// CreateDesease,
// UpdateDesease,
// DeleteDesease,

deseaseRouter.get("/diseasess", SelectAll);

deseaseRouter.get("/:name", SelectDesease);

deseaseRouter.post("/", CreateDesease);

deseaseRouter.put("/:id", UpdateDesease);

deseaseRouter.delete("/:id", DeleteDesease);

export default deseaseRouter;
