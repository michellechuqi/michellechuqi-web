# About the data used:
The basemap was modified from the publicly available Versatiles Colorful tiles on Maputnik.
Data of the health facilities was taken from the NSW Government Spatial Collaboration Portal. It was published in September 2021 and can be accessed here: https://portal.spatial.nsw.gov.au/client/services?id=6ce011fc15bc4b36a2ae7dc16849db90

# About the files in lab1 in my Github repository:
Everything for Exploratory Lab 1 is in the directory 'lab1'.
* **README.md** is this file.
* **index.html** is the code for how I developed the map.
* **lab1-style.json** is the style information for the basemap.
* **map-screenshot.png** is the same screenshot seen in the section below.
* **nsw-ambulanceStations.json** and **nsw-hospitals.json** are the datasets downloaded from the Spatial Collaboration Portal.

# Screenshot of map:
![Screenshot of health facilities in a part of Sydney](map-screenshot.png)

# Reflective analysis:
I designed my map for New South Wales health researchers who need to know where hospitals and ambulance stations are, as well as the transportation infrastructure that residents might use to get there. The map attempts to ask where hospitals are in New South Wales and how proximate they are to road infrastructure and ambulance stations.

Since part of my question is about road infrastructure, I modified a basemap style so that major and minor roads, as well as subway and ferry systems, are visible. The health facilities are circles with slightly transparent fill so the density of health facilities can be gauged at smaller zooms. I wanted a map that can be used for navigation, and my map achieved that because the basemap style has transportation information. I made the map work at multiple zoom levels via the interpolate method when designing the symbols' paint specifications, so that at different zoom levels, the symbol radii change. I think the map can be improved so that the popups show more information about the hospital/ambulance station, such as their capacity or if they have emergency departments/some other medical department or not.

## Cartographic principles:
* visual contrast: the symbol colours for the health facilities stand out from the basemap colours and cannot be mistaken for vegetation or water body features.
* legibility: even without a legend, the map is straightforward about what differently-coloured symbols mean: one colour represents hospitals, and the other represents ambulance stations. This is reinforced with the popups showing names that end with 'STATION' or 'HOSPITAL'.

# Link to map: 
https://michellechuqi.github.io/michellechuqi-web/lab1/index.html

# From map critique session:
A friend noted that a legend and info about the data sources would have made the map more useful for users. However, creating a legend for categorical variables has not been taught in the course so far. Otherwise, she said the interactivity is a strength as one can gauge the density of the health facilities at smaller zooms and access more information through the popups. 
