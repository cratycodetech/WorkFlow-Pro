import { Router } from "express";
import {
  deleteLeave,
  updateLeave,
  addLeave,
  getSingleLeave,
  getCountLeaveTypes,
  getAllLeave,
} from "../controller/leave.controller";

const router = Router();

// get all leave employee
router.get("/all", getAllLeave);

// get single leave  employee
router.get("/single/:id", getSingleLeave);

// get count value according to  type of leave  employee
router.get("/type", getCountLeaveTypes);

// employee create leave
router.post("/create", addLeave);

//update employee leave info
router.put("/update/:id", updateLeave);

// delete employee leave info
router.delete("/delete/:id", deleteLeave);

export default router;