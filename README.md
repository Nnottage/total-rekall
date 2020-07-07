## TotalRekall

### PROJECT DESCRIPTION
- This is the codebase for the  TotalRekall app.

### Installing
- The project uses docker and docker-compose to unify all dependencies. To set up, run:
``` bash
  bin/docker_setup.sh
```

### Development
- To run the project in development mode you can use either expo:
``` bash
  npm start
```
or if you want to run inside docker (recommended)
For MacOS:
``` bash
  REACT_NATIVE_PACKAGER_HOSTNAME=$(ipconfig getifaddr en0) docker-compose run --service-ports app npm start
  # The REACT_NATIVE_PACKAGER_HOSTNAME is used to allow expo to connect to your phone from inside the container
```
For other OS's, the commands to get the host IP may be  different

- Commands in general can be run with ```docker-compose run app COMMAND```
- Look at the [```bin/docker_entrypoint.sh```](bin/docker_entrypoint.sh) for examples of commands.
