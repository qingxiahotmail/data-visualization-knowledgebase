const express = require('express');
const path = require('path');
const cors = require('cors');
const multimediaService = require('./services/MultimediaService');
const visualizationAdvisor = require('./services/VisualizationAdvisor');
const courseFramework = require('./models/CourseFramework');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 提供多媒体文件访问
app.use('/multimedia', express.static(path.join(__dirname, '../multimedia')));

// API路由

// 获取所有知识库条目
app.get('/api/knowledgebase', (req, res) => {
  const knowledgebase = require('../data/knowledgebase.json');
  res.json(knowledgebase);
});

// 获取特定知识库条目
app.get('/api/knowledgebase/:id', (req, res) => {
  const knowledgebase = require('../data/knowledgebase.json');
  const item = knowledgebase.find(item => item.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Knowledge item not found' });
  }
});

// 按分类获取知识库条目
app.get('/api/knowledgebase/category/:category', (req, res) => {
  const knowledgebase = require('../data/knowledgebase.json');
  const items = knowledgebase.filter(item => item.category === req.params.category);
  res.json(items);
});

// 获取所有多媒体文件
app.get('/api/multimedia', (req, res) => {
  const media = multimediaService.getAllMedia();
  res.json(media);
});

// 按类型获取多媒体文件
app.get('/api/multimedia/type/:type', (req, res) => {
  const media = multimediaService.getMediaByType(req.params.type);
  res.json(media);
});

// 获取特定多媒体文件信息
app.get('/api/multimedia/:filename', (req, res) => {
  const media = multimediaService.getMediaInfo(req.params.filename);
  if (media) {
    res.json(media);
  } else {
    res.status(404).json({ error: 'Media file not found' });
  }
});

// 搜索多媒体文件
app.get('/api/multimedia/search/:query', (req, res) => {
  const media = multimediaService.searchMedia(req.params.query);
  res.json(media);
});

// 按章节组织多媒体文件
app.get('/api/multimedia/organized', (req, res) => {
  const organizedMedia = multimediaService.organizeMediaByChapter();
  res.json(organizedMedia);
});

// 可视化辅导API

// 推荐图表类型
app.get('/api/advisor/recommend', (req, res) => {
  const { dataType, purpose } = req.query;
  const recommendations = visualizationAdvisor.recommendCharts(dataType, purpose);
  res.json({ recommendations });
});

// 获取最佳实践
app.get('/api/advisor/best-practices', (req, res) => {
  const { chartType } = req.query;
  const practices = visualizationAdvisor.getBestPractices(chartType);
  res.json({ practices });
});

// 获取常见问题
app.get('/api/advisor/common-questions', (req, res) => {
  const questions = visualizationAdvisor.getCommonQuestions();
  res.json({ questions });
});

// 搜索常见问题
app.get('/api/advisor/search-questions', (req, res) => {
  const { query } = req.query;
  const questions = visualizationAdvisor.searchQuestions(query);
  res.json({ questions });
});

// 获取数据处理建议
app.get('/api/advisor/data-advice', (req, res) => {
  const { dataType } = req.query;
  const advice = visualizationAdvisor.getDataProcessingAdvice(dataType);
  res.json({ advice });
});

// 课程框架API

// 获取核心教学理念
app.get('/api/course/philosophy', (req, res) => {
  const philosophy = courseFramework.getCorePhilosophy();
  res.json(philosophy);
});

// 获取所有课程模块
app.get('/api/course/modules', (req, res) => {
  const modules = courseFramework.getAllModules();
  res.json(modules);
});

// 根据类型获取课程模块
app.get('/api/course/modules/:type', (req, res) => {
  const modules = courseFramework.getModulesByType(req.params.type);
  res.json(modules);
});

// 获取特定模块
app.get('/api/course/module/:moduleId', (req, res) => {
  const module = courseFramework.getModuleById(req.params.moduleId);
  if (module) {
    res.json(module);
  } else {
    res.status(404).json({ error: 'Module not found' });
  }
});

// 获取特定章节
app.get('/api/course/chapter/:chapterId', (req, res) => {
  const chapter = courseFramework.getChapterById(req.params.chapterId);
  if (chapter) {
    res.json(chapter);
  } else {
    res.status(404).json({ error: 'Chapter not found' });
  }
});

// 获取教学方法
app.get('/api/course/teaching-methods', (req, res) => {
  const methods = courseFramework.getTeachingMethods();
  res.json({ teachingMethods: methods });
});

// 获取评估方式
app.get('/api/course/assessment-methods', (req, res) => {
  const methods = courseFramework.getAssessmentMethods();
  res.json({ assessmentMethods: methods });
});

// 搜索课程内容
app.get('/api/course/search', (req, res) => {
  const { query } = req.query;
  if (!query) {
    res.status(400).json({ error: 'Query parameter is required' });
    return;
  }
  const results = courseFramework.searchContent(query);
  res.json({ results });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Excel Visualization Knowledgebase Server running on http://localhost:${PORT}`);
  console.log(`API Documentation:`);
  console.log(`- GET http://localhost:${PORT}/api/knowledgebase - 获取所有知识库条目`);
  console.log(`- GET http://localhost:${PORT}/api/knowledgebase/:id - 获取特定知识库条目`);
  console.log(`- GET http://localhost:${PORT}/api/knowledgebase/category/:category - 按分类获取知识库条目`);
  console.log(`- GET http://localhost:${PORT}/api/multimedia - 获取所有多媒体文件`);
  console.log(`- GET http://localhost:${PORT}/api/multimedia/type/:type - 按类型获取多媒体文件`);
  console.log(`- GET http://localhost:${PORT}/api/multimedia/:filename - 获取特定多媒体文件信息`);
  console.log(`- GET http://localhost:${PORT}/api/multimedia/search/:query - 搜索多媒体文件`);
  console.log(`- GET http://localhost:${PORT}/api/multimedia/organized - 按章节组织多媒体文件`);
  console.log(`- GET http://localhost:${PORT}/api/advisor/recommend - 推荐图表类型`);
  console.log(`- GET http://localhost:${PORT}/api/advisor/best-practices - 获取最佳实践`);
  console.log(`- GET http://localhost:${PORT}/api/advisor/common-questions - 获取常见问题`);
  console.log(`- GET http://localhost:${PORT}/api/advisor/search-questions - 搜索常见问题`);
  console.log(`- GET http://localhost:${PORT}/api/advisor/data-advice - 获取数据处理建议`);
  console.log(`- GET http://localhost:${PORT}/api/course/philosophy - 获取核心教学理念`);
  console.log(`- GET http://localhost:${PORT}/api/course/modules - 获取所有课程模块`);
  console.log(`- GET http://localhost:${PORT}/api/course/modules/:type - 根据类型获取课程模块`);
  console.log(`- GET http://localhost:${PORT}/api/course/module/:moduleId - 获取特定模块`);
  console.log(`- GET http://localhost:${PORT}/api/course/chapter/:chapterId - 获取特定章节`);
  console.log(`- GET http://localhost:${PORT}/api/course/teaching-methods - 获取教学方法`);
  console.log(`- GET http://localhost:${PORT}/api/course/assessment-methods - 获取评估方式`);
  console.log(`- GET http://localhost:${PORT}/api/course/search - 搜索课程内容`);
  console.log(`- 多媒体文件访问: http://localhost:${PORT}/multimedia/:filename`);
});