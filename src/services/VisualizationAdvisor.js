class VisualizationAdvisor {
  constructor() {
    this.chartRecommendations = {
      comparison: ['柱状图', '条形图', '雷达图', '瀑布图'],
      trend: ['折线图', '面积图', '散点图', '气泡图'],
      composition: ['饼图', '环形图', '堆叠柱状图', '树状图'],
      distribution: ['直方图', '箱线图', '散点图', '热力图'],
      relationship: ['散点图', '气泡图', '热力图', '雷达图']
    };

    this.bestPractices = {
      general: [
        '保持图表简洁，避免不必要的装饰',
        '使用一致的颜色方案',
        '确保图表标题清晰描述数据内容',
        '为坐标轴添加明确的标签和单位',
        '使用适当的图表类型来展示数据关系'
      ],
      barChart: [
        '垂直柱状图的宽度要大于条间距',
        '以零基线为起点',
        '避免使用3D效果',
        '当类别较多时考虑使用水平条形图'
      ],
      lineChart: [
        '减小Y轴刻度单位可增强数据波动情况',
        '突出显示折线图中的数据点',
        '折线图中的线条数量不宜过多',
        '使用垂直线对应折线上的数据点'
      ],
      pieChart: [
        '不要忽视饼图扇区的位置排序',
        '使用双色刻度渐变显示数据大小',
        '分离饼图扇区强调特殊数据',
        '不要使用超过7个扇区的饼图'
      ],
      scatterChart: [
        '用平滑线联系散点图增强图形效果',
        '用均匀的坐标刻度显示数据变化趋势',
        '为散点图添加趋势线标记点的分布',
        '互换XY轴坐标使密集的点在垂直方向上'
      ]
    };

    this.commonQuestions = [
      {
        question: '如何选择合适的图表类型？',
        answer: '选择图表类型时，首先要明确你的数据要表达的核心信息：是比较不同类别的数据？展示数据随时间的变化趋势？还是显示数据的分布情况？根据数据关系类型选择对应的图表类型。'
      },
      {
        question: '为什么我的图表看起来杂乱无章？',
        answer: '可能的原因包括：数据源没有经过适当的整理和筛选、图表类型选择不当、颜色和样式过于复杂、坐标轴刻度设置不合理等。建议先优化数据源，然后选择更合适的图表类型。'
      },
      {
        question: '如何让图表更美观？',
        answer: '保持简洁的设计，使用和谐的颜色方案，添加适当的标题和标签，确保图表元素之间有足够的间距，避免3D效果和过度装饰。'
      },
      {
        question: '如何突出显示图表中的关键数据？',
        answer: '可以使用不同的颜色突出关键数据，或者将关键数据点从图表中分离出来，添加数据标签，或者使用动画效果强调重要信息。'
      }
    ];
  }

  // 根据数据类型和分析目的推荐图表类型
  recommendCharts(dataType, analysisPurpose) {
    let recommendations = [];
    
    switch (analysisPurpose) {
      case 'comparison':
        recommendations = this.chartRecommendations.comparison;
        break;
      case 'trend':
        recommendations = this.chartRecommendations.trend;
        break;
      case 'composition':
        recommendations = this.chartRecommendations.composition;
        break;
      case 'distribution':
        recommendations = this.chartRecommendations.distribution;
        break;
      case 'relationship':
        recommendations = this.chartRecommendations.relationship;
        break;
      default:
        recommendations = Object.values(this.chartRecommendations).flat();
    }
    
    return recommendations;
  }

  // 获取最佳实践建议
  getBestPractices(chartType = 'general') {
    return this.bestPractices[chartType] || this.bestPractices.general;
  }

  // 获取常见问题解答
  getCommonQuestions() {
    return this.commonQuestions;
  }

  // 搜索常见问题
  searchQuestions(query) {
    const lowerQuery = query.toLowerCase();
    return this.commonQuestions.filter(item => 
      item.question.toLowerCase().includes(lowerQuery) || 
      item.answer.toLowerCase().includes(lowerQuery)
    );
  }

  // 获取数据处理建议
  getDataProcessingAdvice(dataType) {
    const advice = {
      numerical: [
        '检查数据的分布情况',
        '处理异常值',
        '考虑数据标准化或归一化',
        '选择合适的统计指标'
      ],
      categorical: [
        '合并相似类别',
        '检查类别分布的平衡性',
        '考虑重新排序类别',
        '使用适当的编码方式'
      ],
      timeSeries: [
        '确保时间序列的连续性',
        '选择合适的时间粒度',
        '处理缺失值',
        '考虑季节性和趋势'
      ]
    };
    
    return advice[dataType] || advice.numerical;
  }
}

module.exports = new VisualizationAdvisor;