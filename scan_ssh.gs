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
lon_int   = 5
lon_range = 30
lon_cur   = lon_MIN
lon_up    = lon_cur+lon_range

*Initialize min and max latitude (yt_ocean)
lat_MIN = 45
lat_MAX = 50


*Open the control file
'open soda4_na_ocean_or_1980_01_06_Full_Set.ctl'


*scan across the domain and display ssh
while (1)
  clear
  'set lon 'lon_cur' 'lon_up
  'set lat 'lat_MIN' 'lat_MAX
  'd ssh'
  prompt 'Direction to scan (E for east, W for west, Q for quit)'
  pull dir
  if (dir='E')
    lon_cur = lon_cur+lon_int
    lon_up = lon_cur+lon_range
  endif
  if (dir='W')
    lon_cur = lon_cur-lon_int
    lon_up = lon_cur+lon_range
  endif
  if (dir='Q')
    break
  endif
endwhile
