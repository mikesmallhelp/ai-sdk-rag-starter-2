export const generateChunks = (input: string, maxChunkSize: number): string[] => {
    const sentences = input
      .trim()
      .split('.')
      .filter(i => i !== '');
  
    const chunks: string[] = [];
    let currentChunk = '';
  
    sentences.forEach(sentence => {
      const sentenceWithDot = sentence + '.';
      if ((currentChunk + sentenceWithDot).length > maxChunkSize) {
        chunks.push(currentChunk.trimStart());
        currentChunk = sentenceWithDot;
      } else {
        currentChunk += sentenceWithDot;
      }
    });
  
    if (currentChunk) {
      chunks.push(currentChunk.trimStart());
    }
  
    return chunks;
  };