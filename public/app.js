// 数据可视化知识库前端应用
class DataVisualizationKB {
    constructor() {
        this.baseUrl = '/api';
        this.currentSection = 'home';
        this.knowledgebaseData = [];
        this.multimediaData = [];
        this.init();
    }

    // 初始化应用
    init() {
        this.setupEventListeners();
        this.loadHomepageData();
    }

    // 设置事件监听器
    setupEventListeners() {
        // 导航链接点击事件
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const sectionId = link.getAttribute('href').substring(1);
                this.switchSection(sectionId);
                this.updateActiveNavLink(link);
            });
        });

        // 搜索功能
        document.getElementById('searchBtn').addEventListener('click', () => {
            this.performSearch();
        });

        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.performSearch();
            }
        });

        // 知识库筛选
        document.getElementById('categoryFilter').addEventListener('change', () => {
            this.filterKnowledgebase();
        });

        document.getElementById('searchKB').addEventListener('input', () => {
            this.filterKnowledgebase();
        });

        // 多媒体筛选
        document.getElementById('mediaTypeFilter').addEventListener('change', () => {
            this.filterMultimedia();
        });

        document.getElementById('searchMedia').addEventListener('input', () => {
            this.filterMultimedia();
        });

        // 图表推荐表单提交
        document.getElementById('chartRecommendForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.getChartRecommendations();
        });

        // 图表类型选择
        document.getElementById('chartTypeSelect').addEventListener('change', () => {
            this.getBestPractices();
        });

        // FAQ搜索
        document.getElementById('faqSearch').addEventListener('input', () => {
            this.searchFAQs();
        });

        // 模态框关闭
        document.querySelector('.close').addEventListener('click', () => {
            this.closeModal();
        });

        // 点击模态框外部关闭
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('modal');
            if (e.target === modal) {
                this.closeModal();
            }
        });
    }

    // 切换页面区域
    switchSection(sectionId) {
        // 隐藏所有区域
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // 显示目标区域
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = sectionId;

            // 根据区域加载数据
            switch (sectionId) {
                case 'knowledgebase':
                    this.loadKnowledgebase();
                    break;
                case 'multimedia':
                    this.loadMultimedia();
                    break;
                case 'advisor':
                    this.loadAdvisorData();
                    break;
                case 'course':
                    this.loadCourseFramework();
                    break;
            }
        }
    }

    // 更新激活的导航链接
    updateActiveNavLink(activeLink) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }

    // 加载首页数据
    async loadHomepageData() {
        try {
            // 加载统计数据
            this.loadStatistics();
        } catch (error) {
            console.error('加载首页数据失败:', error);
        }
    }

    // 加载统计数据
    async loadStatistics() {
        try {
            const [knowledgeResponse, mediaResponse] = await Promise.all([
                fetch(`${this.baseUrl}/knowledgebase`),
                fetch(`${this.baseUrl}/multimedia`)
            ]);

            const knowledgeData = await knowledgeResponse.json();
            const mediaData = await mediaResponse.json();

            // 统计类别数量
            const categories = new Set(knowledgeData.map(item => item.category));

            // 更新统计数字
            this.animateCounter('statItems', knowledgeData.length);
            this.animateCounter('statMedia', mediaData.length);
            this.animateCounter('statCategories', categories.size);
            this.animateCounter('statViews', Math.floor(Math.random() * 10000) + 1000);
        } catch (error) {
            console.error('加载统计数据失败:', error);
        }
    }

    // 数字动画效果
    animateCounter(elementId, targetValue) {
        const element = document.getElementById(elementId);
        let currentValue = 0;
        const increment = targetValue / 50;
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= targetValue) {
                currentValue = targetValue;
                clearInterval(timer);
            }
            element.textContent = Math.floor(currentValue);
        }, 30);
    }

    // 加载知识库数据
    async loadKnowledgebase() {
        try {
            const response = await fetch(`${this.baseUrl}/knowledgebase`);
            this.knowledgebaseData = await response.json();
            this.renderKnowledgebase(this.knowledgebaseData);
            this.updateCategoryFilter();
        } catch (error) {
            console.error('加载知识库数据失败:', error);
        }
    }

    // 更新分类筛选器
    updateCategoryFilter() {
        const categoryFilter = document.getElementById('categoryFilter');
        // 获取所有唯一分类
        const categories = [...new Set(this.knowledgebaseData.map(item => item.category))];
        
        // 清空现有选项（保留"全部"选项）
        categoryFilter.innerHTML = '<option value="">全部</option>';
        
        // 添加动态生成的分类选项
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }

    // 渲染知识库列表
    renderKnowledgebase(data) {
        const container = document.getElementById('knowledgebaseList');
        
        if (data.length === 0) {
            container.innerHTML = '<p class="no-data">没有找到相关的知识库条目</p>';
            return;
        }

        container.innerHTML = data.map(item => `
            <div class="knowledge-item">
                <h3>${item.title}</h3>
                <div class="metadata">
                    <span class="category">${item.category}</span>
                    <span class="subcategory">${item.subcategory}</span>
                    <span class="date">${new Date(item.createdAt).toLocaleDateString()}</span>
                </div>
                <div class="content-preview">
                    ${this.renderContentPreview(item.content)}
                </div>
                <button class="btn-primary" onclick="kb.showKnowledgeItem('${item.id}')">查看详情</button>
            </div>
        `).join('');
    }

    // 渲染内容预览
    renderContentPreview(content) {
        // 提取前100个字符作为预览
        let preview = '';
        let charCount = 0;
        
        for (const element of content) {
            if (element.type === 'paragraph' && charCount < 100) {
                const text = element.text;
                if (charCount + text.length > 100) {
                    preview += text.substring(0, 100 - charCount) + '...';
                    charCount = 100;
                } else {
                    preview += text + ' ';
                    charCount += text.length + 1;
                }
            }
        }
        
        return preview || '暂无内容预览';
    }

    // 显示知识库条目详情
    async showKnowledgeItem(id) {
        try {
            const response = await fetch(`${this.baseUrl}/knowledgebase/${id}`);
            const item = await response.json();
            this.showModal(item.title, this.renderKnowledgeItemDetail(item));
        } catch (error) {
            console.error('加载知识库条目失败:', error);
        }
    }

    // 渲染知识库条目详情
    renderKnowledgeItemDetail(item) {
        return `
            <div class="knowledge-detail">
                <div class="detail-header">
                    <h3>${item.title}</h3>
                    <div class="metadata">
                        <span class="category">${item.category}</span>
                        <span class="subcategory">${item.subcategory}</span>
                        <span class="date">${new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div class="detail-content">
                    ${this.renderContent(item.content)}
                </div>
                ${item.multimedia.length > 0 ? `
                    <div class="detail-multimedia">
                        <h4>相关多媒体资源</h4>
                        <div class="media-grid">
                            ${item.multimedia.map(media => `
                                <div class="media-thumbnail">
                                    <img src="/multimedia/${media}" alt="相关资源">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    // 渲染内容
    renderContent(content) {
        return content.map(element => {
            switch (element.type) {
                case 'heading':
                    return `<h${element.level}>${element.text}</h${element.level}>`;
                case 'paragraph':
                    return `<p>${element.text}</p>`;
                case 'image':
                    return `<div class="content-image"><img src="/multimedia/${element.src}" alt="${element.alt}"></div>`;
                default:
                    return '';
            }
        }).join('');
    }

    // 筛选知识库
    filterKnowledgebase() {
        const category = document.getElementById('categoryFilter').value;
        const searchTerm = document.getElementById('searchKB').value.toLowerCase();

        let filteredData = [...this.knowledgebaseData];

        // 按分类筛选
        if (category) {
            filteredData = filteredData.filter(item => item.category === category);
        }

        // 按搜索词筛选
        if (searchTerm) {
            filteredData = filteredData.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                JSON.stringify(item.content).toLowerCase().includes(searchTerm)
            );
        }

        this.renderKnowledgebase(filteredData);
    }

    // 加载多媒体数据
    async loadMultimedia() {
        try {
            const response = await fetch(`${this.baseUrl}/multimedia`);
            this.multimediaData = await response.json();
            this.renderMultimedia(this.multimediaData);
        } catch (error) {
            console.error('加载多媒体数据失败:', error);
        }
    }

    // 渲染多媒体画廊
    renderMultimedia(data) {
        const container = document.getElementById('multimediaGallery');
        
        if (data.length === 0) {
            container.innerHTML = '<p class="no-data">没有找到相关的多媒体资源</p>';
            return;
        }

        container.innerHTML = data.map(item => `
            <div class="media-item" onclick="kb.showMediaItem('${item.name}')">
                <img src="/multimedia/${item.name}" alt="${item.name}">
                <div class="media-info">
                    <div class="media-name">${item.name}</div>
                    <div class="media-type">${item.type}</div>
                </div>
            </div>
        `).join('');
    }

    // 显示媒体项
    showMediaItem(filename) {
        this.showModal(filename, `<img src="/multimedia/${filename}" alt="${filename}" style="max-width: 100%; max-height: 70vh;">`);
    }

    // 筛选多媒体
    filterMultimedia() {
        const mediaType = document.getElementById('mediaTypeFilter').value;
        const searchTerm = document.getElementById('searchMedia').value.toLowerCase();

        let filteredData = [...this.multimediaData];

        // 按类型筛选
        if (mediaType) {
            filteredData = filteredData.filter(item => item.type === mediaType);
        }

        // 按搜索词筛选
        if (searchTerm) {
            filteredData = filteredData.filter(item => 
                item.name.toLowerCase().includes(searchTerm)
            );
        }

        this.renderMultimedia(filteredData);
    }

    // 加载可视化辅导数据
    async loadAdvisorData() {
        this.getBestPractices();
        this.loadFAQs();
    }

    // 获取图表推荐
    async getChartRecommendations() {
        const dataType = document.getElementById('dataType').value;
        const purpose = document.getElementById('analysisPurpose').value;
        
        try {
            const response = await fetch(`${this.baseUrl}/advisor/recommend?dataType=${dataType}&purpose=${purpose}`);
            const result = await response.json();
            
            document.getElementById('chartRecommendations').innerHTML = `
                <h4>推荐图表类型</h4>
                <ul>
                    ${result.recommendations.map(chart => `<li>${chart}</li>`).join('')}
                </ul>
            `;
        } catch (error) {
            console.error('获取图表推荐失败:', error);
        }
    }

    // 获取最佳实践
    async getBestPractices() {
        const chartType = document.getElementById('chartTypeSelect').value;
        
        try {
            const response = await fetch(`${this.baseUrl}/advisor/best-practices?chartType=${chartType}`);
            const result = await response.json();
            
            document.getElementById('bestPractices').innerHTML = `
                <h4>${chartType === 'general' ? '通用' : chartType}最佳实践</h4>
                <ul>
                    ${result.practices.map(practice => `<li>${practice}</li>`).join('')}
                </ul>
            `;
        } catch (error) {
            console.error('获取最佳实践失败:', error);
        }
    }

    // 加载常见问题
    async loadFAQs() {
        try {
            const response = await fetch(`${this.baseUrl}/advisor/common-questions`);
            const result = await response.json();
            this.renderFAQs(result.questions);
        } catch (error) {
            console.error('加载常见问题失败:', error);
        }
    }

    // 渲染常见问题
    renderFAQs(questions) {
        const container = document.getElementById('faqList');
        
        container.innerHTML = questions.map(q => `
            <div class="faq-item">
                <h4>${q.question}</h4>
                <p>${q.answer}</p>
            </div>
        `).join('');
    }

    // 搜索FAQ
    async searchFAQs() {
        const query = document.getElementById('faqSearch').value;
        
        if (!query) {
            this.loadFAQs();
            return;
        }

        try {
            const response = await fetch(`${this.baseUrl}/advisor/search-questions?query=${encodeURIComponent(query)}`);
            const result = await response.json();
            this.renderFAQs(result.questions);
        } catch (error) {
            console.error('搜索FAQ失败:', error);
        }
    }

    // 执行全局搜索
    performSearch() {
        const searchTerm = document.getElementById('searchInput').value;
        if (!searchTerm) return;

        // 根据当前激活的区域执行搜索
        switch (this.currentSection) {
            case 'knowledgebase':
                document.getElementById('searchKB').value = searchTerm;
                this.filterKnowledgebase();
                break;
            case 'multimedia':
                document.getElementById('searchMedia').value = searchTerm;
                this.filterMultimedia();
                break;
            case 'advisor':
                document.getElementById('faqSearch').value = searchTerm;
                this.searchFAQs();
                break;
            default:
                // 切换到知识库并执行搜索
                this.switchSection('knowledgebase');
                setTimeout(() => {
                    document.getElementById('searchKB').value = searchTerm;
                    this.filterKnowledgebase();
                }, 100);
        }
    }

    // 显示模态框
    showModal(title, content) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modalBody');
        
        modalBody.innerHTML = `<h3>${title}</h3>${content}`;
        modal.classList.add('show');
    }

    // 关闭模态框
    closeModal() {
        document.getElementById('modal').classList.remove('show');
    }

    // 加载课程框架数据
    async loadCourseFramework() {
        try {
            // 并行加载所有课程框架数据
            const [philosophy, modules, teachingMethods, assessmentMethods] = await Promise.all([
                this.fetchData('/api/course/philosophy'),
                this.fetchData('/api/course/modules'),
                this.fetchData('/api/course/teaching-methods'),
                this.fetchData('/api/course/assessment-methods')
            ]);

            this.renderCorePhilosophy(philosophy);
            this.renderCourseModules(modules);
            this.renderTeachingMethods(teachingMethods.teachingMethods);
            this.renderAssessmentMethods(assessmentMethods.assessmentMethods);
            this.setupModuleFilters(modules);
        } catch (error) {
            console.error('加载课程框架数据失败:', error);
        }
    }

    // 渲染核心教学理念
    renderCorePhilosophy(philosophy) {
        const container = document.querySelector('#corePhilosophy .philosophy-content');
        container.innerHTML = `
            <h4>愿景</h4>
            <p>${philosophy.vision}</p>
            <h4>使命</h4>
            <p>${philosophy.mission}</p>
            <h4>核心价值观</h4>
            <div class="philosophy-values">
                ${philosophy.values.map(value => `<span class="value-item">${value}</span>`).join('')}
            </div>
        `;
    }

    // 渲染课程模块
    renderCourseModules(modules) {
        const container = document.getElementById('modulesList');
        container.innerHTML = modules.map(module => `
            <div class="module-card" data-type="${module.type}">
                <div class="module-header">
                    <h3 class="module-title">${module.title}</h3>
                    <span class="module-type ${module.type}">${this.getModuleTypeLabel(module.type)}</span>
                </div>
                <p class="module-description">${module.description}</p>
                <div class="chapters-list">
                    <h4>章节内容</h4>
                    ${module.chapters.map(chapter => `
                        <div class="chapter-item">
                            <div class="chapter-title">${chapter.title}</div>
                            <div class="chapter-topics">
                                ${chapter.content.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // 获取模块类型标签
    getModuleTypeLabel(type) {
        const labels = {
            theory: '理论模块',
            practice: '实践模块',
            humanity: '人文素养',
            project: '实战项目'
        };
        return labels[type] || type;
    }

    // 设置模块筛选功能
    setupModuleFilters(modules) {
        const filterBtns = document.querySelectorAll('.module-filter-btn');
        const moduleCards = document.querySelectorAll('.module-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // 更新活跃状态
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterType = btn.getAttribute('data-type');
                this.filterModules(filterType, moduleCards);
            });
        });
    }

    // 筛选模块
    filterModules(filterType, moduleCards) {
        moduleCards.forEach(card => {
            if (filterType === 'all' || card.getAttribute('data-type') === filterType) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // 渲染教学方法
    renderTeachingMethods(methods) {
        const container = document.getElementById('teachingMethods');
        container.innerHTML = methods.map(method => `<li>${method}</li>`).join('');
    }

    // 渲染评估方式
    renderAssessmentMethods(methods) {
        const container = document.getElementById('assessmentMethods');
        container.innerHTML = methods.map(method => `
            <div class="assessment-item">
                <h4>
                    ${method.type}
                    <span class="assessment-weight">${method.weight}%</span>
                </h4>
                <p class="assessment-description">${method.description}</p>
            </div>
        `).join('');
    }

    // 通用数据获取方法
    async fetchData(url) {
        const response = await fetch(`${this.baseUrl}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}

// 初始化应用
const kb = new DataVisualizationKB();