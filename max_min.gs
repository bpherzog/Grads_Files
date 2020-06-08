*DESCRIPTION: creates plot of the max and min SHH, salt, and velocity at each
*             time step
*
*REVISION HISTORY:
* bph - 06/08/20 - created


*first, clear all settings and setup the display
'reinit'
'c'


*Initialize variables for latitude
lat_min = 45.0361
lat_max = 47

*Initialize variables for longitude
lon_min = 0
lon_max = 360

*Initialize variables for time
time_min = 1
time_max = 6

*Set the lat and lon
'set lon 'lon_min' 'lon_max
'set lat 'lat_min' 'lat_max
