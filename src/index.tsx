import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import { ReportHandler, Metric } from 'web-vitals'

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)

const onPerfEntry: ReportHandler = (metric: Metric) => {
    console.log('metric', metric)
}

reportWebVitals(onPerfEntry)
