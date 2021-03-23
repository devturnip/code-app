### API Definitions
*Assuming that server is running on port 3000*
1. http://localhost:3000/api/results/callscript 
     - **/api/results/callscript** : (GET) endpoint for calling python script producing first 20 odd numbers from 0.
2. http://localhost:3000/api/results/showtables
    - **/api/results/showtables** : (GET) endpoint for showing all values (SELECT *) in result table.
3. http://localhost:3000/api/results/storeindb
    - **/api/results/storeindb** : (POST) endpoint
    which calls python script and stores result into result table.


### Notes
- Database username & pw is stored in .env
- .env is stored in repo to share credentials used in localdb.