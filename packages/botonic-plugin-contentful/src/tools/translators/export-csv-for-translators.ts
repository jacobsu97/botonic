import { CsvExport, skipEmptyStrings } from './csv-export'
import { Locale } from '../../nlp'
import { Contentful } from '../../contentful'
import { ContentfulOptions } from '../../plugin'

async function writeCsvForTranslators(
  options: ContentfulOptions,
  locale: Locale,
  fileName: string
) {
  const cms = new Contentful(options)
  const exporter = new CsvExport({
    stringFilter: skipEmptyStrings,
  })
  return await exporter.write(fileName, cms, locale)
}

if (process.argv.length < 7 || process.argv[2] == '--help') {
  console.error(`Usage: space_id environment access_token locale filename`)
  process.exit(1)
}

const spaceId = process.argv[2]
const environment = process.argv[3]
const accessToken = process.argv[4]
const locale = process.argv[5]
const fileName = process.argv[6]

async function main() {
  try {
    await writeCsvForTranslators(
      {
        spaceId,
        accessToken,
        environment,
      },
      locale,
      fileName
    )
    console.log('done')
  } catch (e) {
    console.error(e)
  }
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main().then(() => {
  console.log('done')
})
