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

## Generative AI Reflection

- **Tool:** Claude Opus 5.5 (Anthropic), used through Claude Code in October 2026.
- **What I used it for:** drafting the HTML, CSS and D3 code by following the steps of the exercise brief, and explaining what each D3 method does.
- **What I changed or checked:** I ran the page with a local server, checked the data in the browser console and the elements in the DOM, and checked that the code only uses techniques from the Week 4 to Week 6 lectures and exercises.
- **What I learned:** how event listeners receive the event and the bound datum, how `.classed()` keeps the active button in sync, and why only attributes after `.transition()` are animated.
- **Limitations:** the AI wrote code faster than I could read it, so I went through every file line by line before the demonstration. Each commit that contains generated code says so in the commit message, and each code file starts with a comment marking the GenAI use.
