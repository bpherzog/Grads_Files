'reinit'; 'set xsize 1500 1100'; 'set display color white'; 'c'; 'set gxout grfill'; 'set grid off'

tm = '01:00Z1jan1980'
zn = 1; z1 = 1; z2 = 71
yn = 5

ln1 = -50; ln2 = -40
lt1 =  45; lt2 =  50


*'open ocean_orig_test_hires_na_1hr.ctl'
*'open ocean_orig_test_hires_na_wall_1hr.ctl'
'open ocean_orig_test_hires_na.ctl'

'set time 'tm; 'set lon 'ln1' 'ln2; 'set lat 'lt1' 'lt2; 'set z 'zn
'dpth = gint(temp/temp,z=1,z=75)'

'set vpage 0 5.5 4.25 8.5'; 'set grads off'
'd ssh'; '/glade/u/home/chepurin/GS/cbarn.gs'
'set gxout contour'; 'd dpth'; 'set gxout grfill'
'q dim';
ln5 = sublin(result,5); wrd6 = subwrd(ln5,6)
'draw title SSH, 'wrd6', z='z1

'set vpage 5.5 11.0 4.25 8.5'; 'set grads off'
'set y 'yn; 'set z 'z1' 'z2
'set yflip on'; 'd w'; '/glade/u/home/chepurin/GS/cbarn.gs'
'draw title W, y='yn

'set vpage 0.0 5.5 0.0 4.25'; 'set grads off'
'set yflip on'; 'd u'; '/glade/u/home/chepurin/GS/cbarn.gs'
'draw title U, y='yn

'set vpage 5.5 11.0 0.0 4.25'; 'set grads off'
'set yflip on'; 'd v'; '/glade/u/home/chepurin/GS/cbarn.gs'
'draw title V, y='yn

'set vpage off'; 'set grads off'
