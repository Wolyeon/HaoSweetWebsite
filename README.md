# HaoSweetWebsite

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

In our case we are hosting to Github pages so we can create a production version using the following commpand:

```bash
ng build --output-path docs --base-href /haosweetwebsite/
```

## Resources

This website is built using Typescript and Angular.

## TODO
- Make it so the website does not make a get request if we already have cake information downloaded and saved during the session
- 