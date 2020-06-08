*DESCRIPTION: creates plot of the SHH, salt, and velocity and allows scanning
*             actoss the boundary
*
*REVISION HISTORY:
* bph - 06/05/20 - created


*first, clear all settings and setup the display
'reinit'
'c'
'set gxout grfill'
'set grid off'


*Initialize min and max longitude (xt_ocean)
lon_int   = 5
lon_range = 30
lon_cur   = -180
lon_up    = lon_cur+lon_range

*Initialize min and max latitude (yt_ocean)
lat_MIN = 45
lat_MAX = 50
