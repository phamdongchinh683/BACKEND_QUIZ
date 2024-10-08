// import express, { Router } from "express";
// const router: Router = express.Router();

// import authMiddleware from "../../middlewares/Auth/authMiddleware";
// import adminMiddleware from "../../middlewares/Admin/adminMiddleware";
// import adminController from "../../controllers/Admin/admin.controllers";
// import authController from "../../controllers/Auth/auth.controllers";

// router.post("/login", adminMiddleware.isAdmin, authController.login);

// router.get(
//   "/profile",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.profile
// );
// router.post(
//   "/manage-profile/change-information",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateProfile
// );

// router.post(
//   "/manage-profile/change-password",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updatePassword
// );

// router.post(
//   "/manage-profile/remove-avatar",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeAvatar
// );

// router.get(
//   "/manage-language/language-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.languageList
// );
// router.post(
//   "/manage-language/add-language",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addLanguage
// );

// router.post(
//   "/manage-language/update-language/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateLanguage
// );

// router.post(
//   "/manage-language/remove-language/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeLanguage
// );

// router.post(
//   "/manage-test/add-test",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addExam
// );
// router.post(
//   "/manage-test/update-test/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateExam
// );

// router.post(
//   "/manage-test/remove-test/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeExam
// );

// router.get(
//   "/manage-test/test-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.examList
// );

// router.get(
//   "/manage-skill-test/skill-test-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.skillTestList
// );

// router.post(
//   "/manage-skill-test/add-skill-test",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addSkillTest
// );

// router.post(
//   "/manage-skill-test/update-skill-test/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateSkillTest
// );

// router.post(
//   "/manage-skill-test/remove-skill-test/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeSkillTest
// );

// router.get(
//   "/manage-question/question-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.questionList
// );

// router.post(
//   "/manage-question/add-question",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addQuestion
// );

// router.post(
//   "/manage-question/update-question/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateQuestion
// );

// router.post(
//   "/manage-question/remove-question",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeQuestion
// );

// router.get(
//   "/manage-role/role-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.roleList
// );

// router.post(
//   "/manage-role/add-role",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addRole
// );

// router.post(
//   "/manage-role/update-role/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateRole
// );

// router.post(
//   "/manage-role/remove-role/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeRole
// );

// router.get(
//   "/manage-level/level-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.levelList
// );

// router.post(
//   "/manage-level/add-level",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addLevel
// );

// router.post(
//   "/manage-level/update-level/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateLevel
// );

// router.post(
//   "/manage-level/remove-level/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeLevel
// );

// router.get(
//   "/manage-course/course-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.courseList
// );

// router.post(
//   "/manage-course/add-course",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addCourse
// );

// router.post(
//   "/manage-course/update-course/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateCourse
// );

// router.post(
//   "/manage-course/remove-course/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeCourse
// );

// router.get(
//   "/manage-lesson/lesson-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.lessonList
// );

// router.post(
//   "/manage-lesson/add-lesson",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addLesson
// );

// router.post(
//   "/manage-lesson/update-lesson/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateLesson
// );

// router.post(
//   "/manage-lesson/remove-lesson/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeLesson
// );

// router.get(
//   "/manage-unit/unit-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.unitList
// );

// router.post(
//   "/manage-unit/add-unit",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addUnit
// );

// router.post(
//   "/manage-unit/update-unit/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateUnit
// );

// router.post(
//   "/manage-unit/remove-unit/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeUnit
// );

// router.get(
//   "/manage-lesson-content/lesson-content-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.lessonContentList
// );

// router.post(
//   "/manage-lesson-content/add-lesson-content",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addContent
// );

// router.post(
//   "/manage-lesson-content/update-lesson-content/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateContent
// );

// router.post(
//   "/manage-lesson-content/remove-lesson-content/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeContent
// );

// router.get(
//   "/manage-course-class/course-class-list",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.classList
// );

// router.post(
//   "/manage-course-class/add-course-class",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.addClass
// );

// router.post(
//   "/manage-course-class/update-course-class/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.updateClass
// );

// router.post(
//   "/manage-course-class/remove-course-class/:id",
//   authMiddleware.authorization,
//   adminMiddleware.roleAdmin,
//   adminController.removeClass
// );

// module.exports = router;

