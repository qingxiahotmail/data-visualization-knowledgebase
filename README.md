# 数据可视化知识库

一个综合性的数据可视化知识平台，涵盖理论基础、技术实践、人文素养和现代技术（包括Vibe Coding和AI技术）。

## 🌟 项目特点

### 🔍 知识库功能
- **分类浏览**：按理论知识、技术实践、人文素养、现代技术等分类组织
- **搜索功能**：支持全文搜索和分类筛选
- **动态分类**：自动从知识库数据生成分类选项
- **响应式设计**：适配不同屏幕尺寸

### 📚 课程框架
- **核心教学理念**：理论与实践结合，技术与人文并重
- **模块化课程**：5大核心模块，覆盖数据可视化全领域
- **教学方法**：多样化的教学方式
- **评估体系**：科学的学习评估方法

### 🎨 现代技术
- **Vibe Coding**：新兴的数据可视化设计理念
- **AI辅助可视化**：探索AI技术在数据可视化中的应用
- **生成式AI**：使用AI生成高质量数据可视化

### 📊 可视化辅导
- **图表推荐**：根据数据类型和分析目的推荐合适图表
- **最佳实践**：各种图表类型的设计规范
- **常见问题**：数据可视化常见问题解答

## 📁 项目结构

```
excel-visualization-knowledgebase/
├── data/                    # 知识库数据
│   └── knowledgebase.json   # 知识库条目
├── multimedia/              # 多媒体资源
├── public/                  # 前端静态文件
│   ├── index.html           # 主页面
│   ├── app.js               # 前端应用逻辑
│   └── styles.css           # 样式文件
├── src/                     # 后端源代码
│   ├── models/              # 数据模型
│   │   ├── CourseFramework.js
│   │   └── KnowledgeItem.js
│   ├── services/            # 服务层
│   │   ├── MultimediaService.js
│   │   └── VisualizationAdvisor.js
│   ├── scripts/             # 辅助脚本
│   └── server.js            # 服务器入口
├── package.json             # 项目配置
└── .gitignore               # Git忽略文件
```

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
node src/server.js
```

服务器将在 `http://localhost:3000` 启动。

### 3. 访问应用

在浏览器中打开：
- 主页：http://localhost:3000
- 知识库：http://localhost:3000/#knowledgebase
- 课程框架：http://localhost:3000/#course
- 可视化辅导：http://localhost:3000/#advisor

## 📡 API 文档

### 知识库 API

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/knowledgebase` | GET | 获取所有知识库条目 |
| `/api/knowledgebase/:id` | GET | 获取特定知识库条目 |
| `/api/knowledgebase/category/:category` | GET | 按分类获取知识库条目 |

### 课程框架 API

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/course/philosophy` | GET | 获取核心教学理念 |
| `/api/course/modules` | GET | 获取所有课程模块 |
| `/api/course/modules/:type` | GET | 按类型获取课程模块 |
| `/api/course/teaching-methods` | GET | 获取教学方法 |
| `/api/course/assessment-methods` | GET | 获取评估方式 |

### 可视化辅导 API

| 端点 | 方法 | 描述 |
|------|------|------|
| `/api/advisor/recommend` | GET | 推荐图表类型 |
| `/api/advisor/best-practices` | GET | 获取最佳实践 |
| `/api/advisor/common-questions` | GET | 获取常见问题 |
| `/api/advisor/search-questions` | GET | 搜索常见问题 |

## 🎯 核心功能详解

### 1. 知识库系统

知识库包含20+条目，涵盖以下分类：

- **理论知识**：数据可视化概述、设计原则、数据基础、统计基础等
- **技术实践**：Excel图表技术、Python/JavaScript可视化库、商业工具等
- **人文素养**：数据故事、伦理责任、社会影响等
- **现代技术**：Vibe Coding、AI辅助可视化、生成式AI等

### 2. 课程框架

5大核心模块：

1. **数据可视化理论基础**：建立坚实的理论基础
2. **Excel可视化技术**：掌握Excel图表技能
3. **高级可视化技术**：学习Python/JavaScript可视化库
4. **数据可视化设计与人文关怀**：理解设计中的人文因素
5. **现代可视化技术与趋势**：探索Vibe Coding和AI技术

### 3. 可视化辅导

- **智能图表推荐**：根据数据类型和分析目的推荐合适图表
- **最佳实践指导**：各种图表类型的设计规范和注意事项
- **常见问题解答**：涵盖数据处理、图表选择、设计原则等方面

## 🛠️ 技术栈

### 后端
- **Node.js**：JavaScript运行时
- **Express.js**：Web应用框架
- **JSON**：数据存储格式

### 前端
- **HTML5**：页面结构
- **CSS3**：样式设计
- **JavaScript (ES6+)**：交互逻辑
- **Font Awesome**：图标库

### 开发工具
- **Git**：版本控制
- **npm**：依赖管理

## 📈 数据模型

### 知识库条目结构

```json
{
  "id": "unique-id",
  "title": "条目标题",
  "content": [
    {
      "type": "paragraph",
      "text": "段落内容"
    }
  ],
  "category": "分类名称",
  "subcategory": "子分类名称",
  "multimedia": [],
  "examples": [],
  "relatedTopics": [],
  "createdAt": "2025-12-16T14:00:00.000Z",
  "updatedAt": "2025-12-16T14:00:00.000Z"
}
```

## 🤝 贡献指南

1. **Fork** 本仓库
2. 创建您的 **功能分支** (`git checkout -b feature/AmazingFeature`)
3. 提交您的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 **Pull Request**

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 项目地址：https://github.com/qingxiahotmail/data-visualization-knowledgebase
- 问题反馈：https://github.com/qingxiahotmail/data-visualization-knowledgebase/issues

## 📊 项目统计

- **知识库条目**：20+
- **分类数量**：6+
- **功能模块**：5大核心模块
- **API端点**：20+

## 🚀 未来计划

- [ ] 添加更多知识库条目
- [ ] 支持多媒体内容上传
- [ ] 实现用户评论功能
- [ ] 增加更多AI辅助功能
- [ ] 支持多语言

---

**数据可视化知识库** - 让数据说话，让技术赋能！ 📊✨