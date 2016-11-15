import _ from 'lodash'
import setPathCookie from './utils/setPathCookie'
import removeMobileHover from './utils/removeMobileHover'

const requestURL = "https://spreadsheets.google.com/feeds/list/12M7lpW4jVl4YtB0D6WwnlSoUubuuHFWTgtfgj4JfLto/od6/public/values?alt=json"

const requestData = (url) => {
    let request = new XMLHttpRequest()

    request.onreadystatechange = () => {
        if (request.readyState == XMLHttpRequest.DONE ) {
           if (request.status == 200) {
           		const json = JSON.parse(request.responseText)
           		const data = _.get(json, 'feed')
           		return data
         	}
           return {}
        }
    }

    request.open("GET", url, true)
    request.send()
}

removeMobileHover()
setPathCookie()

const data = requestData(requestURL)

// Add class to html if JS is loaded
document.getElementsByTagName('html')[0].className+='js-loaded'
