declare module '@nlpjs/similarity/src' {
  export function leven(left: string, right: string): number
}

declare module '@nlpjs/ner/src' {
  export interface WordPosition {
    start: number
    end: number
    len: number
  }

  export interface BestSubstringResult {
    start: number
    /** end is INCLUSIVE */
    end: number
    len: number
    levenshtein: number
    accuracy: number
  }

  export class ExtractorEnum {
    constructor()

    getWordPositions(str: string): WordPosition[]

    getBestSubstringList(
      str1: string,
      str2: string,
      words1: WordPosition[] | undefined,
      threshold: number
    ): BestSubstringResult[]
  }
}

declare module '@nlpjs/core/src' {
  export class Tokenizer {
    tokenize(text: string, normalize: boolean): string[]
  }
  export class Stemmer {
    stem(tokens: string[]): string[]
  }

  export class BaseStemmer extends Stemmer {
    stem(tokens: string[]): string[]
  }
}

declare module '@nlpjs/lang-en-min/src/stemmer-en' {
  import { BaseStemmer } from '@nlpjs/core/src'

  class StemmerEn extends BaseStemmer {}
  export = StemmerEn
}

declare module '@nlpjs/lang-en-min/src/tokenizer-en' {
  import { Tokenizer } from '@nlpjs/core/src'

  class TokenizerEn extends Tokenizer {}

  export = TokenizerEn
}

declare module '@nlpjs/lang-es/src/stemmer-es' {
  import { BaseStemmer } from '@nlpjs/core/src'

  class StemmerEs extends BaseStemmer {}
  export = StemmerEs
}

declare module '@nlpjs/lang-es/src/tokenizer-es' {
  import { Tokenizer } from '@nlpjs/core/src'

  class TokenizerEs extends Tokenizer {}
  export = TokenizerEs
}

declare module '@nlpjs/lang-pt/src/stemmer-pt' {
  import { BaseStemmer } from '@nlpjs/core/src'

  class StemmerPt extends BaseStemmer {}
  export = StemmerPt
}

declare module '@nlpjs/lang-pt/src/tokenizer-pt' {
  import { Tokenizer } from '@nlpjs/core/src'

  class TokenizerPt extends Tokenizer {}
  export = TokenizerPt
}

declare module '@nlpjs/lang-ca/src/stemmer-ca' {
  import { BaseStemmer } from '@nlpjs/core/src'

  class StemmerCa extends BaseStemmer {}
  export = StemmerCa
}

declare module 'sort-stream' {
  function sort(func: (a: any, b: any) => number): any
  export = sort
}
