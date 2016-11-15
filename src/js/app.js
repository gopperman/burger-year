import setPathCookie from './utils/setPathCookie'
import removeMobileHover from './utils/removeMobileHover'

const requestURL = "https://spreadsheets.google.com/feeds/list/12M7lpW4jVl4YtB0D6WwnlSoUubuuHFWTgtfgj4JfLto/od6/public/values?alt=json"

const requestData = (url) => {
    let data = new XMLHttpRequest()

    data.onreadystatechange = () => {
        if (data.readyState == XMLHttpRequest.DONE ) {
           if (data.status == 200) {
           		console.log(JSON.parse(data.responseText))
           		return JSON.parse(data.responseText)
           }
           return {}
        }
    }

    data.open("GET", url, true)
    data.send()
}

removeMobileHover()
setPathCookie()

const data = requestData(requestURL)

// Add class to html if JS is loaded
document.getElementsByTagName('html')[0].className+='js-loaded'
