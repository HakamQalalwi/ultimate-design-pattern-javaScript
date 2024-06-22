class AnalyzedData {}

class Data {}

class GeneratedReport {
  constructor(isPassed) {
    this.isPassed = isPassed;
  }

  isPassed() {
    return this.isPassed;
  }
}

class CVReportGeneration {
  generateCVReport(cvFilePath) {
    const file = this.readFile(cvFilePath);
    const extractedData = this.extractData(file);
    const analyzedData = this.analyzeData(extractedData);
    return this.generateReportOf(analyzedData);
  }

  readFile(filePath) {
    console.log("reading file from: " + filePath);
    return null;
  }

  analyzeData(data) {
    console.log("analyzing data...");
    return new AnalyzedData();
  }

  generateReportOf(analyzedData) {
    console.log("generating report...");
    return new GeneratedReport(true);
  }

  extractData(file) {}
}

class ImageCVReportGeneration extends CVReportGeneration {
  extractData(file) {
    console.log("extracting data from an image...");
    return new Data();
  }
}

class PdfCVReportGeneration extends CVReportGeneration {
  extractData(file) {
    console.log("extracting data from PDF");
    return new Data();
  }
}

class WordCVReportGeneration extends CVReportGeneration {
  extractData(file) {
    console.log("extracting data from word file");
    return new Data();
  }
}

// Usage Example
const imageReport = new ImageCVReportGeneration();
imageReport.generateCVReport("path/to/image");

const pdfReport = new PdfCVReportGeneration();
pdfReport.generateCVReport("path/to/pdf");

const wordReport = new WordCVReportGeneration();
wordReport.generateCVReport("path/to/word");

// OUTPUT
// reading file from: path/to/image
// extracting data from an image...
// analyzing data...
// generating report...
// reading file from: path/to/pdf
// extracting data from PDF
// analyzing data...
// generating report...
// reading file from: path/to/word
// extracting data from word file
// analyzing data...
// generating report...
