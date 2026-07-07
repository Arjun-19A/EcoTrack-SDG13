import express from "express";

import Activity from "../models/Activity.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

/*
Save Activity
*/

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { transport, electricity, waste } = req.body;

    const carbonFootprint =
      transport * 0.21 + electricity * 0.45 + waste * 0.18;

    const activity = await Activity.create({
      user: req.user.id,
      transport,
      electricity,
      waste,
      carbonFootprint,
    });

    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

/*
Get User Activities
*/

router.get("/", authMiddleware, async (req, res) => {
  try {
    const activities = await Activity.find({
      user: req.user.id,
    }).sort({
      createdAt: -1,
    });

    res.json(activities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;
