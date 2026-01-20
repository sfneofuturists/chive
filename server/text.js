const slugify = require('slugify')

exports.cleanName = (name = '') => {
  return name
    .trim()
    // eslint-disable-next-line no-useless-escape
    //.replace(/^(\d+[-–—_\s]*)([^\d\/\-^\s]+)/, '$2') // remove leading numbers and delimiters
    .replace(/^(\d+\s+[-–—_]+\s+)([^\d\/\-^\s]+)/, '$2') // remove leading numbers and delimiters
    .replace(/\s*\|\s*([^|]+)$/i, '') // remove trailing pipe and tags

    // commented out for SF Neo-Futurists b/c some play titles use periods in
    // ways that resemble file extensions.
    //.replace(/\.[^.]+$/, '') // remove file extensions
}

exports.slugify = (text = '') => {
  // convert non alpha numeric into whitespace, rather than removing
  const alphaNumeric = text.replace(/[^\p{L}\p{N}]+/ug, ' ')
  return slugify(alphaNumeric, {
    lower: true
  })
}
