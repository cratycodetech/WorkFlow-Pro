import { NextFunction, Request, Response } from "express";
import Announcement from "../model/announcement.model";

export const getAllAnnouncement = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const announcements = await Announcement.find({});

    res.status(200).json({
      message: "Announcements get successfully",
      data: announcements,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
      throw new Error("No record found");
    }

    res.status(200).json({
      message: "Announcement get successully",
      data: announcement,
    });
  } catch (err: any) {
    next(err);
  }
};

// get announcements by department
export const getAnnouncementsByDepartment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { departmentName } = req.params;
    //console.log(departmentName)
    const announcements = await Announcement.find({ departmentName: departmentName });
    res.status(200).json({
      message: "Announcement get successully",
      data: announcements,
    });
  } catch (error:any) {
    next(error)  }
};

// get announcements by specific employee
export const getAnnouncementsByEmployee = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { employeeId } = req.params;
    const announcements = await Announcement.find({ employeeId});
    res.status(200).json({
      message: "Announcement get successully",
      data: announcements,
    });
  } catch (error:any) {
    next(error)  }
};

export const addAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;

    if (Object.keys(data).length === 0) {
      throw new Error("Request body is empty");
    }

    const announcement = await Announcement.create(data);

    res.status(201).json({
      message: "Announcement created successfully",
      data: announcement,
    });
  } catch (err: any) {
    next(err);
  }
};

export const updateAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const announcement = await Announcement.findById(req.params.id);

    if (!announcement) {
      throw new Error("No record found");
    }

    const data = await Announcement.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Announcement updated successfully",
      data: data,
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteAnnouncement = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await Announcement.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Announcement deleted successfully",
    });
  } catch (err: any) {
    next(err);
  }
};