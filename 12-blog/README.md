# Blog Project

## File system
- **.env** : to hold environment valiables. Variable names differ according to how the app is created. "REACT_APP_VariableName" if made using create-react-app and "VITE_VariableName" if created using Vite.
- **.env.sample** : hold environment variables without values
- **conf.conf.js** : Defines a configuration object *conf* for an Appwrite backend service, extracting values from environment variables and ensuring they're treated as strings. It exports this object for use throughout the application.
- **auth.js** : Authorization using appwrite
- **config.js** : Configuration of posts (Create, update, delete, add files, etc )

## [Appwrite setup](https://youtu.be/4_JlIr8yry0?si=hKc1RuhO2KDSI1D2)