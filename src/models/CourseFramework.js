class CourseFramework {
  constructor() {
    this.corePhilosophy = {
      vision: "培养具备数据思维、可视化技能和人文关怀的数据可视化专家",
      mission: "通过理论与实践结合，技术与人文并重的教学，让学生掌握数据可视化的核心技术和设计理念，包括最新的Vibe Coding和AI技术应用，能够创建既美观又有深度的数据可视化作品",
      values: [
        "数据驱动决策",
        "设计美学与功能性平衡",
        "人文关怀与社会责任",
        "终身学习与创新思维",
        "拥抱新技术与趋势"
      ]
    };

    // 基于数据可视化教材的核心内容，新增Vibe Coding和AI技术模块
    this.modules = [
      {
        id: "module_001",
        title: "数据可视化理论基础",
        type: "theory",
        description: "建立坚实的理论基础，理解数据可视化的核心概念和原则",
        chapters: [
          {
            id: "ch_001_01",
            title: "数据可视化概述",
            content: [
              "数据可视化的定义与发展历程",
              "数据可视化的分类与应用领域",
              "数据可视化的目标与价值",
              "数据可视化与数据科学的关系"
            ]
          },
          {
            id: "ch_001_02",
            title: "数据基础与数据处理",
            content: [
              "数据类型与数据结构",
              "数据清洗与预处理",
              "数据变换与标准化",
              "数据抽样与数据质量"
            ]
          },
          {
            id: "ch_001_03",
            title: "统计基础与数据特征",
            content: [
              "描述性统计与推断统计",
              "集中趋势与离散程度",
              "数据分布与相关性",
              "统计图表的选择原则"
            ]
          },
          {
            id: "ch_001_04",
            title: "数据可视化设计原则",
            content: [
              "视觉感知与认知心理学",
              "设计美学与布局原则",
              "色彩理论与应用",
              "字体与排版设计"
            ]
          },
          {
            id: "ch_001_05",
            title: "数据伦理与社会责任",
            content: [
              "数据可视化中的伦理问题",
              "避免数据误导与偏见",
              "隐私保护与数据安全",
              "数据可视化的社会责任"
            ]
          }
        ]
      },
      {
        id: "module_002",
        title: "传统可视化技术",
        type: "practice",
        description: "掌握Excel等传统工具中的数据可视化技术",
        chapters: [
          {
            id: "ch_002_01",
            title: "Excel基础图表",
            content: [
              "柱状图/条形图的创建与优化",
              "折线图/面积图的应用",
              "饼图/圆环图的设计原则",
              "散点图/气泡图的使用"
            ]
          },
          {
            id: "ch_002_02",
            title: "Excel高级图表",
            content: [
              "组合图表的设计",
              "动态图表与交互设计",
              "条件格式与数据条",
              "迷你图与图标集"
            ]
          },
          {
            id: "ch_002_03",
            title: "Excel数据处理",
            content: [
              "数据透视表与透视图",
              "Power Query数据处理",
              "Excel函数在可视化中的应用",
              "VBA自动化与图表生成"
            ]
          },
          {
            id: "ch_002_04",
            title: "Excel可视化高级技巧",
            content: [
              "图表美化与设计",
              "图表模板与主题",
              "图表导出与分享",
              "Power BI与Excel集成"
            ]
          }
        ]
      },
      {
        id: "module_003",
        title: "现代可视化技术与趋势",
        type: "practice",
        description: "掌握最新的数据可视化技术，包括Vibe Coding和AI技术应用",
        chapters: [
          {
            id: "ch_003_01",
            title: "Vibe Coding基础",
            content: [
              "Vibe Coding的定义与理念",
              "Vibe Coding的核心原则",
              "Vibe Coding在数据可视化中的应用",
              "Vibe Coding工具与实践"
            ]
          },
          {
            id: "ch_003_02",
            title: "AI辅助数据可视化",
            content: [
              "AI在数据可视化中的角色",
              "AI生成可视化设计",
              "AI辅助数据分析与洞察",
              "AI可视化工具介绍与实践"
            ]
          },
          {
            id: "ch_003_03",
            title: "生成式AI与可视化",
            content: [
              "生成式AI的基本概念",
              "使用AI生成可视化图表",
              "AI驱动的交互式可视化",
              "生成式AI可视化案例分析"
            ]
          },
          {
            id: "ch_003_04",
            title: "现代可视化工具",
            content: [
              "Python可视化库（Matplotlib, Seaborn, Plotly）",
              "JavaScript可视化库（D3.js, Chart.js）",
              "商业可视化工具（Tableau, Power BI）",
              "低代码/无代码可视化平台"
            ]
          }
        ]
      },
      {
        id: "module_004",
        title: "数据可视化设计与人文关怀",
        type: "humanity",
        description: "理解可视化设计中的人文因素，创建具有人文关怀的数据可视化作品",
        chapters: [
          {
            id: "ch_004_01",
            title: "用户中心的可视化设计",
            content: [
              "目标受众分析",
              "信息架构与用户体验",
              "无障碍设计原则",
              "多设备适配"
            ]
          },
          {
            id: "ch_004_02",
            title: "数据故事与叙事技巧",
            content: [
              "数据故事的结构与要素",
              "叙事技巧与情感共鸣",
              "多媒体元素的整合",
              "图表标题与说明的撰写"
            ]
          },
          {
            id: "ch_004_03",
            title: "可视化的美学与艺术",
            content: [
              "色彩搭配与情感表达",
              "构图与空间设计",
              "视觉层次与引导",
              "创意可视化设计"
            ]
          },
          {
            id: "ch_004_04",
            title: "数据可视化的社会影响",
            content: [
              "数据可视化与社会变革",
              "公共数据与公民参与",
              "数据可视化与可持续发展",
              "数据可视化的未来发展趋势"
            ]
          }
        ]
      },
      {
        id: "module_005",
        title: "实战项目与案例分析",
        type: "project",
        description: "通过真实项目和案例分析，综合运用所学知识解决实际问题",
        chapters: [
          {
            id: "ch_005_01",
            title: "商业数据分析案例",
            content: [
              "销售数据可视化与趋势分析",
              "市场份额与竞争分析",
              "财务报表可视化",
              "客户行为分析"
            ]
          },
          {
            id: "ch_005_02",
            title: "社会科学与公共政策案例",
            content: [
              "人口数据可视化",
              "教育数据分析与比较",
              "公共卫生数据可视化",
              "社会经济指标分析"
            ]
          },
          {
            id: "ch_005_03",
            title: "环境与可持续发展案例",
            content: [
              "气候变化数据可视化",
              "能源消耗与碳排放分析",
              "可持续发展指标可视化",
              "环境质量监测数据展示"
            ]
          },
          {
            id: "ch_005_04",
            title: "AI与Vibe Coding应用案例",
            content: [
              "使用AI生成可视化设计",
              "Vibe Coding在数据可视化中的实践",
              "AI辅助数据分析项目",
              "生成式AI可视化案例"
            ]
          },
          {
            id: "ch_005_05",
            title: "个人项目实践",
            content: [
              "项目规划与需求分析",
              "数据收集与处理",
              "可视化设计与实现",
              "项目优化与评估",
              "项目展示与分享"
            ]
          }
        ]
      }
    ];

    // 生成知识库内容
    this.knowledgebase = this.generateKnowledgebase();

    this.teachingMethods = [
      "理论讲解与案例分析结合",
      "实践操作与项目驱动学习",
      "小组讨论与协作学习",
      "嘉宾讲座与行业分享",
      "在线资源与自主学习"
    ];

    this.assessmentMethods = [
      {
        type: "理论考核",
        weight: 20,
        description: "考察对数据可视化理论知识的掌握"
      },
      {
        type: "实践作业",
        weight: 30,
        description: "完成一系列数据可视化实践任务，包括传统技术和新技术应用"
      },
      {
        type: "项目评估",
        weight: 40,
        description: "完成一个完整的数据可视化项目，包括设计、实现和展示，可以选择Vibe Coding或AI技术应用"
      },
      {
        type: "参与度",
        weight: 10,
        description: "课堂参与、讨论和协作表现"
      }
    ];
  }

  // 生成知识库内容，包含Vibe Coding和AI技术
  generateKnowledgebase() {
    const knowledgebase = [];

    // 添加Vibe Coding相关内容
    knowledgebase.push({
      id: "kb_vibe_001",
      title: "Vibe Coding基础与应用",
      category: "现代技术",
      subcategory: "Vibe Coding",
      content: [
        {
          type: "paragraph",
          text: "Vibe Coding是一种新兴的数据可视化设计理念，强调通过代码创建具有视觉吸引力和情感共鸣的可视化效果。"
        },
        {
          type: "heading",
          level: 2,
          text: "Vibe Coding的核心原则"
        },
        {
          type: "list",
          items: [
            "视觉和谐：追求色彩、形状和动效的和谐统一",
            "情感共鸣：通过设计唤起观众的情感反应",
            "动态表达：利用动画和交互增强信息传达",
            "代码驱动：通过代码实现灵活的可视化设计",
            "持续迭代：不断优化和改进可视化效果"
          ]
        },
        {
          type: "paragraph",
          text: "Vibe Coding适用于需要强烈视觉冲击力的场景，如数据艺术、信息图表和交互式数据故事。"
        }
      ],
      multimedia: [],
      examples: [
        {
          title: "Vibe Coding数据艺术示例",
          description: "使用代码创建的动态数据艺术作品"
        },
        {
          title: "交互式Vibe Coding可视化",
          description: "具有丰富交互效果的Vibe Coding可视化项目"
        }
      ],
      relatedTopics: [
        "AI辅助数据可视化",
        "生成式AI与可视化",
        "现代可视化工具"
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    // 添加AI技术相关内容
    knowledgebase.push({
      id: "kb_ai_001",
      title: "AI辅助数据可视化",
      category: "现代技术",
      subcategory: "AI技术",
      content: [
        {
          type: "paragraph",
          text: "人工智能技术正在改变数据可视化的创作方式，从设计建议到自动生成，AI为数据可视化带来了新的可能性。"
        },
        {
          type: "heading",
          level: 2,
          text: "AI在数据可视化中的应用场景"
        },
        {
          type: "list",
          items: [
            "自动图表推荐：根据数据特征推荐合适的图表类型",
            "智能设计优化：自动调整图表的颜色、布局和样式",
            "数据洞察生成：从数据中自动发现有价值的洞察",
            "自然语言生成：将数据洞察转换为自然语言描述",
            "生成式可视化：根据文本描述生成完整的可视化图表"
          ]
        },
        {
          type: "heading",
          level: 2,
          text: "主流AI可视化工具"
        },
        {
          type: "list",
          items: [
            "Tableau AI：集成AI功能的数据可视化平台",
            "Power BI Copilot：微软的AI辅助数据分析工具",
            "Datawrapper：支持AI设计建议的在线可视化工具",
            "ChatGPT + 代码生成：使用大语言模型生成可视化代码",
            "专业AI可视化平台：如ThoughtSpot、Sigma Computing等"
          ]
        },
        {
          type: "paragraph",
          text: "AI技术的应用可以显著提高数据可视化的效率和质量，但同时也需要设计师的专业判断和创意指导。"
        }
      ],
      multimedia: [],
      examples: [
        {
          title: "AI生成的销售数据可视化",
          description: "使用AI工具自动生成的销售数据可视化图表"
        },
        {
          title: "AI辅助的数据分析报告",
          description: "包含AI生成洞察的数据分析报告示例"
        }
      ],
      relatedTopics: [
        "Vibe Coding基础与应用",
        "生成式AI与可视化",
        "现代可视化工具"
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    // 添加生成式AI相关内容
    knowledgebase.push({
      id: "kb_ai_002",
      title: "生成式AI与数据可视化",
      category: "现代技术",
      subcategory: "AI技术",
      content: [
        {
          type: "paragraph",
          text: "生成式AI技术，如GPT-4、MidJourney等，可以根据文本描述生成高质量的数据可视化图表，开启了数据可视化创作的新篇章。"
        },
        {
          type: "heading",
          level: 2,
          text: "生成式AI可视化的工作流程"
        },
        {
          type: "list",
          items: [
            "定义需求：明确可视化的目标和受众",
            "准备数据：整理和预处理需要可视化的数据",
            "生成提示：编写清晰的AI生成提示词",
            "AI生成：使用生成式AI工具生成初步可视化",
            "人工优化：对AI生成的可视化进行调整和优化",
            "导出使用：将最终可视化用于报告或展示"
          ]
        },
        {
          type: "heading",
          level: 2,
          text: "生成式AI可视化的优势与挑战"
        },
        {
          type: "paragraph",
          text: "优势：提高创作效率、激发创意灵感、降低技术门槛、支持快速迭代。"
        },
        {
          type: "paragraph",
          text: "挑战：需要高质量的提示词、可能存在准确性问题、缺乏个性化定制、依赖AI工具的能力限制。"
        },
        {
          type: "paragraph",
          text: "生成式AI可视化是数据可视化领域的重要发展方向，将与传统可视化方法相辅相成，共同推动数据可视化的创新发展。"
        }
      ],
      multimedia: [],
      examples: [
        {
          title: "GPT-4生成的可视化图表",
          description: "使用GPT-4生成的数据可视化图表示例"
        },
        {
          title: "MidJourney数据艺术",
          description: "使用MidJourney创建的数据艺术作品"
        }
      ],
      relatedTopics: [
        "Vibe Coding基础与应用",
        "AI辅助数据可视化",
        "现代可视化工具"
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    return knowledgebase;
  }

  // 获取核心教学理念
  getCorePhilosophy() {
    return this.corePhilosophy;
  }

  // 获取所有模块
  getAllModules() {
    return this.modules;
  }

  // 根据类型获取模块
  getModulesByType(type) {
    return this.modules.filter(module => module.type === type);
  }

  // 获取特定模块
  getModuleById(moduleId) {
    return this.modules.find(module => module.id === moduleId);
  }

  // 获取特定章节
  getChapterById(chapterId) {
    for (const module of this.modules) {
      const chapter = module.chapters.find(ch => ch.id === chapterId);
      if (chapter) {
        return { ...chapter, moduleId: module.id, moduleTitle: module.title };
      }
    }
    return null;
  }

  // 获取教学方法
  getTeachingMethods() {
    return this.teachingMethods;
  }

  // 获取评估方式
  getAssessmentMethods() {
    return this.assessmentMethods;
  }

  // 获取知识库内容
  getKnowledgebase() {
    return this.knowledgebase;
  }

  // 搜索课程内容
  searchContent(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();

    // 搜索模块
    for (const module of this.modules) {
      if (module.title.toLowerCase().includes(lowerQuery) || 
          module.description.toLowerCase().includes(lowerQuery)) {
        results.push({ type: "module", ...module });
      }

      // 搜索章节
      for (const chapter of module.chapters) {
        if (chapter.title.toLowerCase().includes(lowerQuery)) {
          results.push({ type: "chapter", ...chapter, moduleId: module.id, moduleTitle: module.title });
        }

        // 搜索章节内容
        for (const topic of chapter.content) {
          if (topic.toLowerCase().includes(lowerQuery)) {
            results.push({ 
              type: "topic", 
              topic, 
              chapterId: chapter.id, 
              chapterTitle: chapter.title,
              moduleId: module.id, 
              moduleTitle: module.title 
            });
          }
        }
      }
    }

    // 搜索知识库
    for (const item of this.knowledgebase) {
      if (item.title.toLowerCase().includes(lowerQuery) ||
          item.content.some(c => c.text && c.text.toLowerCase().includes(lowerQuery))) {
        results.push({ type: "knowledgebase", ...item });
      }
    }

    return results;
  }
}

module.exports = new CourseFramework;