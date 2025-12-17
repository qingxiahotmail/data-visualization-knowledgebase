class KnowledgeItem {
  constructor(id, title, content, category, subcategory, multimedia, examples, relatedTopics) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.category = category;
    this.subcategory = subcategory;
    this.multimedia = multimedia || [];
    this.examples = examples || [];
    this.relatedTopics = relatedTopics || [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      category: this.category,
      subcategory: this.subcategory,
      multimedia: this.multimedia,
      examples: this.examples,
      relatedTopics: this.relatedTopics,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

module.exports = KnowledgeItem;