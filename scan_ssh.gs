*DESCRIPTION: creates plot of the SHH that slowly cycles across the boundary
*
*REVISION HISTORY:
* bph - 06/05/20 - created


*first, clear all settings and setup the display
'reinit'
'c'
'set gxout grfill'
'set grid off'


*Initialize min and max longitude (xt_ocean)
lon_MIN   = -180
lon_MAX   = 180
lon_int   = 20
lon_range = 30
lon_cur   = lon_MIN

*Initialize min and max latitude (yt_ocean)
lat_MIN = 45
lat_MAX = 50

*set the lat for the display
'set lat 'lat_min' 'lat_max

*Open the control file
'open soda4_na_ocean_or_1980_01_06_Full_Set.ctl'


while lon_cur<lon_MAX
  'set lon 'lon_cur' 'lon_cur+lon_range
  'd ssh'
  lon_cur=lon_cur+lon_int
endwhile
