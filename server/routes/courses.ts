import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// Get all courses
router.get('/', (_req, res) => {
  // Return course metadata
  res.json({
    courses: [
      { id: 'git-expert', title: 'Git Expert Mastery', modules: 15 },
      { id: 'python-expert', title: 'Python Expert Mastery', modules: 15 },
      { id: 'english-expert', title: 'English Expert Mastery', modules: 15 },
    ],
  });
});

// Get module content
router.get('/:courseId/module/:moduleId', (req, res) => {
  const { courseId, moduleId } = req.params;
  const filePath = path.join(
    __dirname,
    '../../public/course-materials',
    courseId,
    'modules',
    `${moduleId}.md`
  );

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    res.json({ content });
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

export default router;
