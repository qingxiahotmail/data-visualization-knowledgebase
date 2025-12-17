const fs = require('fs');
const path = require('path');

class MultimediaService {
  constructor() {
    this.multimediaDir = path.join(__dirname, '../../multimedia');
    this.supportedTypes = {
      image: ['jpg', 'jpeg', 'png', 'gif', 'svg'],
      video: ['mp4', 'avi', 'mov', 'wmv'],
      audio: ['mp3', 'wav', 'ogg'],
      document: ['pdf', 'doc', 'docx', 'xls', 'xlsx']
    };
  }

  // 获取所有多媒体文件
  getAllMedia() {
    const mediaFiles = [];
    
    if (!fs.existsSync(this.multimediaDir)) {
      return mediaFiles;
    }
    
    const files = fs.readdirSync(this.multimediaDir);
    
    for (const file of files) {
      const filePath = path.join(this.multimediaDir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isFile()) {
        const ext = path.extname(file).toLowerCase().slice(1);
        let type = 'other';
        
        for (const [mediaType, extensions] of Object.entries(this.supportedTypes)) {
          if (extensions.includes(ext)) {
            type = mediaType;
            break;
          }
        }
        
        mediaFiles.push({
          name: file,
          type: type,
          path: filePath,
          size: stats.size,
          createdAt: stats.birthtime,
          updatedAt: stats.mtime
        });
      }
    }
    
    return mediaFiles;
  }

  // 获取特定类型的多媒体文件
  getMediaByType(type) {
    const allMedia = this.getAllMedia();
    return allMedia.filter(media => media.type === type);
  }

  // 获取媒体文件信息
  getMediaInfo(filename) {
    const filePath = path.join(this.multimediaDir, filename);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }
    
    const stats = fs.statSync(filePath);
    const ext = path.extname(filename).toLowerCase().slice(1);
    
    let type = 'other';
    for (const [mediaType, extensions] of Object.entries(this.supportedTypes)) {
      if (extensions.includes(ext)) {
        type = mediaType;
        break;
      }
    }
    
    return {
      name: filename,
      type: type,
      path: filePath,
      size: stats.size,
      createdAt: stats.birthtime,
      updatedAt: stats.mtime
    };
  }

  // 生成多媒体文件的访问URL
  getMediaUrl(filename) {
    return `/multimedia/${filename}`;
  }

  // 搜索多媒体文件
  searchMedia(query) {
    const allMedia = this.getAllMedia();
    const lowerQuery = query.toLowerCase();
    
    return allMedia.filter(media => 
      media.name.toLowerCase().includes(lowerQuery)
    );
  }

  // 按章节或主题组织多媒体资源
  organizeMediaByChapter() {
    const allMedia = this.getAllMedia();
    const organized = {};
    
    // 按图片编号组织（基于书籍中的图片命名规则）
    for (const media of allMedia) {
      if (media.type === 'image' && media.name.startsWith('Image')) {
        const chapter = this.getChapterFromImageName(media.name);
        if (!organized[chapter]) {
          organized[chapter] = [];
        }
        organized[chapter].push(media);
      }
    }
    
    return organized;
  }

  // 从图片名称推断章节（简单实现）
  getChapterFromImageName(imageName) {
    const imageNumber = parseInt(imageName.replace('Image', '').replace('.jpg', ''));
    
    // 基于图片编号范围大致划分章节
    if (imageNumber < 50) return '第1-3章';
    if (imageNumber < 100) return '第4-6章';
    if (imageNumber < 150) return '第7-9章';
    if (imageNumber < 200) return '第10-11章';
    return '其他';
  }
}

module.exports = new MultimediaService();