import moment from 'moment'

class Formatter {
  formatTextList (list = []) {
    if (!Array.isArray(list)) { return 'Input error' }
    return list.join(', ')
  }

  formatDate (date = '') {
    return moment(date).format('DD/MM/YYYY')
  }

  getColorByStatus (status = '') {
    switch (status) {
      case 'Presumed dead':
        return 'primary'
      case 'Alive':
        return 'secondary'
      case 'Deceased':
        return 'red lighten-1'
      default:
        return 'indigo darken-3'
    }
  }

  translateStatus (status = '') {
    switch (status) {
      case 'Presumed dead':
        return 'Morto?'
      case 'Alive':
        return 'Vivo'
      case 'Deceased':
        return 'Morto'
      default:
        return '??'
    }
  }
}

export default Formatter
