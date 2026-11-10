# Exercise 6: Interactivity

COS30045 Data Visualisation, Bui Dang Minh (105716425)

Live page: https://buidangminh23.github.io/cos30045-ex6-interactivity/

A histogram of TV energy consumption with screen type filter buttons (6.1, 6.2) and a scatterplot of energy use by star rating, coloured by screen type, with a legend and a tooltip that shows the screen size (6.3, 6.4).

## Files

- `js/load-data.js` - loads `data/W6_TVdata.csv` and calls every chart and interaction function
- `js/shared-constants.js` - dimensions, colours, scales, the bin generator and the filter options
- `js/histogram.js` and `js/scatterplot.js` - the two charts
- `js/interactions.js` - filter buttons, histogram update with a transition, tooltip and mouse events
- `css/base.css` and `css/visualisation.css` - page and chart styles

The bin generator uses fixed 200 kWh thresholds (`d3.range(0, 2800, 200)`), so every filter returns the same 14 bins and the updated bars stay aligned with the x axis.

## Run locally

Open the folder in VS Code and start Live Server, or run `python -m http.server` in the folder and open http://localhost:8000. The page must be served by a server so that `d3.csv` can load the data files.
