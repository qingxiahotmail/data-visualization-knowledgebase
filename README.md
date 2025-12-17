# 数据可视化知识库

一个综合性的数据可视化知识平台，涵盖理论基础、技术实践、人文素养和现代技术（包括Vibe Coding和AI技术）。
相关资源分享：https://www.notion.so/AI-2025-2bfb2381a92380e4b479c3a8315bc1f2?source=copy_link

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

## 🚀 本地部署指南

### 1. 环境要求

- **Node.js**：v16.0.0 或更高版本
- **npm**：v8.0.0 或更高版本
- **操作系统**：Windows、macOS、Linux

### 2. 安装步骤

#### 2.1 检查Node.js和npm版本

```bash
node -v
npm -v
```

如果未安装Node.js，请访问 [Node.js官网](https://nodejs.org/) 下载并安装。

#### 2.2 克隆仓库

```bash
git clone https://github.com/qingxiahotmail/data-visualization-knowledgebase.git
cd data-visualization-knowledgebase
```

#### 2.3 安装依赖

```bash
npm install
```

#### 2.4 启动开发服务器

使用npm脚本启动服务器：

```bash
npm start
```

或者使用开发模式（支持热重载）：

```bash
npm run dev
```

#### 2.5 访问应用

服务器启动后，在浏览器中打开：
- 主页：http://localhost:3000
- 知识库：http://localhost:3000/#knowledgebase
- 课程框架：http://localhost:3000/#course
- 可视化辅导：http://localhost:3000/#advisor

### 3. 验证安装

#### 3.1 检查服务器日志

启动服务器后，您应该看到类似以下的输出：

```
Excel Visualization Knowledgebase Server running on http://localhost:3000
API Documentation:
- GET http://localhost:3000/api/knowledgebase - 获取所有知识库条目
...
```

#### 3.2 测试API

使用curl或浏览器测试API端点：

```bash
curl http://localhost:3000/api/knowledgebase
```

您应该会收到JSON格式的知识库数据。

### 4. 项目依赖说明

| 依赖 | 用途 | 是否必需 |
|------|------|----------|
| express | Web应用框架 | ✅ 必需 |
| cors | 跨域资源共享 | ✅ 必需 |
| mongoose | MongoDB ODM | ❌ 可选（当前版本未使用） |
| multer | 文件上传中间件 | ❌ 可选（当前版本未使用） |

### 5. 开发模式

使用nodemon启动开发服务器，支持代码热重载：

```bash
npm run dev
```

### 6. 故障排除

#### 6.1 端口被占用

如果端口3000被占用，您可以通过修改`src/server.js`文件中的端口配置：

```javascript
const PORT = process.env.PORT || 3001;
```

或者使用环境变量：

```bash
PORT=3001 npm start
```

#### 6.2 依赖安装失败

- 尝试清除npm缓存：`npm cache clean --force`
- 重新安装依赖：`npm install`
- 检查网络连接

#### 6.3 数据库连接错误

当前版本未使用MongoDB，您可以忽略相关警告或删除mongoose依赖：

```bash
npm uninstall mongoose
```

### 7. 离线使用

该项目支持离线使用，所有静态资源和数据都存储在本地：

1. 确保已安装所有依赖
2. 启动服务器：`npm start`
3. 在浏览器中访问：http://localhost:3000
4. 您可以在没有网络连接的情况下使用所有功能

## 📁 本地目录结构

```
├── data/                    # 知识库数据（本地JSON文件）
├── multimedia/              # 多媒体资源（本地文件）
├── public/                  # 前端静态文件
└── src/                     # 后端源代码
```

所有数据和资源都存储在本地，无需外部数据库或API服务。

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

## 📚 知识库分级内容

### 1. 理论知识

#### 1.1 数据可视化概述
- **数据可视化的定义与发展历程**
- 数据可视化的核心价值和应用领域
- 数据可视化的发展趋势

#### 1.2 数据基础与数据处理
- 数据类型：数值型、分类型、时间序列、空间数据
- 数据处理步骤：收集、清洗、转换、整合、抽样
- 数据质量评估标准

#### 1.3 统计基础与数据特征
- 集中趋势度量：平均值、中位数、众数
- 离散程度度量：极差、方差、标准差、变异系数
- 数据分布特征：正态分布、偏态分布、峰度、相关性

#### 1.4 数据可视化设计原则
- 准确性、清晰性、可读性、一致性、美观性
- 视觉感知与认知心理学
- 色彩理论与应用

### 2. 技术实践

#### 2.1 Excel基础图表
- 柱状图/条形图的创建与优化
- 折线图/面积图的应用
- 饼图/圆环图的设计原则
- 散点图/气泡图的使用

#### 2.2 Python可视化库
- Matplotlib：基础可视化库
- Seaborn：统计数据可视化
- Plotly：交互式可视化
- Bokeh：大规模数据集可视化

#### 2.3 JavaScript可视化库
- D3.js：数据驱动文档
- Chart.js：简单易用的图表库
- Highcharts：商业级图表库
- ECharts：中文友好的可视化库

#### 2.4 商业可视化工具
- Tableau：市场领先的BI工具
- Power BI：与Office生态系统集成
- QlikView/Qlik Sense：基于关联模型

### 3. 人文素养

#### 3.1 数据故事与叙事技巧
- 数据故事的结构：引言、背景、数据展示、洞察分析、结论
- 叙事技巧：情感化叙事、关注受众、使用对比和转折
- 数据故事的类型：解释型、比较型、趋势型、问题解决型、预测型

#### 3.2 数据伦理与社会责任
- 数据伦理原则：准确性、透明度、隐私保护、公平性、责任性
- 避免数据误导的方法
- 数据可视化的社会责任：揭示社会问题、促进公共数据开放

#### 3.3 可视化设计与人文关怀
- 用户中心的可视化设计
- 可视化的美学与艺术
- 数据可视化的社会影响

### 4. 现代技术

#### 4.1 Vibe Coding基础与应用
- Vibe Coding的核心原则：视觉和谐、情感共鸣、动态表达、代码驱动
- Vibe Coding的特点：个性化、艺术与技术融合、动态交互
- Vibe Coding工具与实践：JavaScript/TypeScript、D3.js、Canvas/SVG

#### 4.2 AI辅助数据可视化
- AI在数据可视化中的应用场景：自动图表推荐、智能设计优化、数据洞察生成
- 主流AI可视化工具：Tableau AI、Power BI Copilot、Datawrapper
- AI辅助可视化的工作流程

#### 4.3 生成式AI与数据可视化
- 生成式AI可视化的工作流程：定义需求、准备数据、生成提示、AI生成、人工优化
- 编写有效的AI生成提示词
- 生成式AI可视化的优势与挑战

## 🎯 核心功能详解

### 1. 知识库系统
- **分类浏览**：按理论知识、技术实践、人文素养、现代技术等分类组织
- **搜索功能**：支持全文搜索和分类筛选
- **动态分类**：自动从知识库数据生成分类选项
- **响应式设计**：适配不同屏幕尺寸

### 2. 课程框架
- **核心教学理念**：理论与实践结合，技术与人文并重
- **模块化课程**：5大核心模块，覆盖数据可视化全领域
- **教学方法**：多样化的教学方式
- **评估体系**：科学的学习评估方法

### 3. 可视化辅导
- **智能图表推荐**：根据数据类型和分析目的推荐合适图表
- **最佳实践**：各种图表类型的设计规范和注意事项
- **常见问题**：数据处理、图表选择、设计原则等方面的解答

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
