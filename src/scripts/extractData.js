const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const KnowledgeItem = require('../models/KnowledgeItem');

// 书籍HTML文件路径
const BOOK_HTML_PATH = 'e:\\BaiduNetdiskDownload\\2345Downloads\\Excel数据可视化：一样的数据不一样的图表：超值版 by 恒盛杰资讯 (z-lib.org)\\OEBPS';

// 输出数据路径
const OUTPUT_DATA_PATH = 'e:\\BaiduNetdiskDownload\\2345Downloads\\excel-visualization-knowledgebase\\data';

// 目录结构映射
const CHAPTER_MAP = {
  '第1章': { category: '数据处理', title: '图表背后杂乱无章的数据源' },
  '第2章': { category: '统计基础', title: '统计中的常见统计量' },
  '第3章': { category: '表格可视化', title: '表格的图形化' },
  '第4章': { category: '数据准备', title: '数据形式改变所引起的图表变化' },
  '第5章': { category: '图表类型', title: '关系中的直条图' },
  '第6章': { category: '图表类型', title: '时间或类别显示趋势的折线图' },
  '第7章': { category: '图表类型', title: '占总体比例的饼图' },
  '第8章': { category: '图表类型', title: '分布状态的散点图' },
  '第9章': { category: '特殊图表', title: '特点不同的特殊图' },
  '第10章': { category: '动态图表', title: '灵活多变的动态图表' },
  '第11章': { category: '可视化设计', title: '图表的可视化之美' }
};

// 提取HTML文件内容
function extractHTMLContent(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);
  
  const content = [];
  const images = [];
  
  // 提取标题
  let title = $('h1.p1').text() || $('h2.p2').text();
  
  // 提取段落内容
  $('body').children().each((i, elem) => {
    if (elem.tagName === 'h1' || elem.tagName === 'h2' || elem.tagName === 'h3' || elem.tagName === 'h4') {
      content.push({
        type: 'heading',
        level: parseInt(elem.tagName.charAt(1)),
        text: $(elem).text()
      });
    } else if (elem.tagName === 'p') {
      content.push({
        type: 'paragraph',
        text: $(elem).text()
      });
    } else if (elem.tagName === 'div' && $(elem).hasClass('pic')) {
      const imgSrc = $(elem).find('img').attr('src');
      if (imgSrc) {
        images.push(imgSrc);
        content.push({
          type: 'image',
          src: imgSrc,
          alt: $(elem).find('img').attr('alt') || ''
        });
      }
    }
  });
  
  return { title, content, images };
}

// 处理单个HTML文件
function processHTMLFile(fileName) {
  const filePath = path.join(BOOK_HTML_PATH, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return null;
  }
  
  try {
    const { title, content, images } = extractHTMLContent(filePath);
    
    // 确定章节和分类
    let category = '其他';
    let subcategory = '';
    
    for (const [chapter, info] of Object.entries(CHAPTER_MAP)) {
      if (title.includes(chapter)) {
        category = info.category;
        subcategory = info.title;
        break;
      }
    }
    
    // 创建知识库条目
    const knowledgeItem = new KnowledgeItem(
      `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      title,
      content,
      category,
      subcategory,
      images,
      [],
      []
    );
    
    return knowledgeItem.toJSON();
  } catch (error) {
    console.error(`Error processing file ${fileName}:`, error.message);
    return null;
  }
}

// 主函数
function main() {
  console.log('Starting data extraction...');
  
  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DATA_PATH)) {
    fs.mkdirSync(OUTPUT_DATA_PATH, { recursive: true });
  }
  
  // 获取所有HTML文件
  const htmlFiles = fs.readdirSync(BOOK_HTML_PATH)
    .filter(file => file.endsWith('.html'));
  
  console.log(`Found ${htmlFiles.length} HTML files`);
  
  // 处理所有HTML文件
  const knowledgeItems = [];
  
  for (const file of htmlFiles) {
    const item = processHTMLFile(file);
    if (item) {
      knowledgeItems.push(item);
    }
  }
  
  // 保存提取的数据
  const outputFile = path.join(OUTPUT_DATA_PATH, 'knowledgebase.json');
  fs.writeFileSync(outputFile, JSON.stringify(knowledgeItems, null, 2), 'utf-8');
  
  console.log(`Extracted ${knowledgeItems.length} knowledge items`);
  console.log(`Data saved to ${outputFile}`);
}

// 运行主函数
main();